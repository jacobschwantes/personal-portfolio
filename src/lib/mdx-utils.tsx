import fs from "fs";
import path from "path";
import { Meta, Project, Post } from "./types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { CopyCodeButton } from "@/components/copy-code-button";

const PROJECTS_FILE_PATH = "src/content/projects";
const BLOGS_FILE_PATH = "src/content/blog";

import { visit } from "unist-util-visit";
import Image from "next/image";

const loadMDXFiles = async (directoryPath: string) => {
	try {
		const filenames = fs.readdirSync(path.join(directoryPath));
		const mdxFiles = await Promise.all(
			filenames.map((filename) => parseMDXFile(filename, directoryPath))
		);
		return mdxFiles;
	} catch (e) {
		console.log(e);
	}
};

const parseMDXFile = async (filename: string, directory: string) => {
	const mdxComponents = {
		pre: (props: React.HTMLProps<HTMLPreElement>) => {
			// @ts-expect-error
			const code = props.raw;

			return (
				<div className="relative flex flex-col">
					<div className="flex absolute top-0 right-0 justify-between items-start p-3">
						<CopyCodeButton code={code} />
					</div>
					<pre className="not-prose pt-0" {...props} />
				</div>
			);
		},
		Image: (props: React.ComponentProps<"img"> & { caption?: string }) => {
			return (
				<div className="flex flex-col">
					<img
						className="relative mb-0 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800  w-full aspect-video rounded-2xl object-cover overflow-hidden"
						src={props.src}
						{...props}
					/>
					{props.caption && (
						<p className="text-zinc-500 dark:text-zinc-400 text-sm text-center">
							{props.caption}
						</p>
					)}
				</div>
			);
		},
	};

	try {
		const markdownFile = fs.readFileSync(
			path.join(directory, filename),
			"utf-8"
		);
		const { content, frontmatter } = await compileMDX<Meta>({
			source: markdownFile,
			options: {
				rsc: true,
				mdxOptions: {
					rehypePlugins: [
						() => (tree) => {
							visit(tree, (node) => {
								if (node?.type === "element" && node?.tagName === "pre") {
									const [codeEl] = node.children;

									if (codeEl.tagName !== "code") return;

									const meta = codeEl?.data?.meta;

									if (meta) {
										type CodeBlockMeta = {
											filename?: string;
											format?: string;
										};
										const output: CodeBlockMeta = {};
										meta.split(" ").forEach((item: string) => {
											const [key, value] = item.split("=");
											output[key as keyof CodeBlockMeta] = value;
										});

										node.meta = JSON.stringify(output);
									}

									node.raw = codeEl.children?.[0].value;
								}
							});
						},
						[
							// @ts-expect-error
							rehypePrettyCode,
							{
								theme: {
									dark: "material-theme-darker",
									light: "github-light",
								},
							},
						],
						() => (tree) => {
							visit(tree, (node) => {
								if (!node.children) return;

								for (const child of node.children) {
									if (child.tagName === "pre") {
										child.properties["raw"] = node.raw;
										child.properties["meta"] = node.meta;
									}
								}
							});
						},
					],
				},
				parseFrontmatter: true,
			},
			components: mdxComponents,
		});

		return {
			meta: frontmatter,
			slug: filename.replace(/\.mdx$/, ""),
			content,
		};
	} catch (e) {
		throw new Error(`Failed to parse MDX File: ${filename}: ${e}`);
	}
};

export const getProjects = async (): Promise<Project[]> => {
	const files = (await loadMDXFiles(PROJECTS_FILE_PATH)) as Project[];
	return files
		.filter(
			(project) => process.env.NODE_ENV == "development" || !project.meta.draft
		)
		.sort((a, b) => a.meta.priority - b.meta.priority);
};

export const getPosts = async (): Promise<Post[]> => {
	const files = (await loadMDXFiles(BLOGS_FILE_PATH)) as Post[];
	return files
		.filter(
			(post) => process.env.NODE_ENV === "development" || !post.meta.draft
		)
		.sort((a, b) => b.meta.date - a.meta.date);
};

export const getProjectById = async (id: string): Promise<Project> =>
	(await parseMDXFile(`${id}.mdx`, PROJECTS_FILE_PATH)) as Project;

export const getPostById = async (id: string): Promise<Post> =>
	(await parseMDXFile(`${id}.mdx`, BLOGS_FILE_PATH)) as Post;

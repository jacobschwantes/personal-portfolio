import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import type { Project, Blog, Meta } from "@/lib/types";

const PROJECTS_FILE_PATH = "src/content/projects";
const BLOGS_FILE_PATH = "src/content/blog";

const getMDXFiles = async (directoryPath: string) => {
  const filenames = fs.readdirSync(path.join(directoryPath));
  const mdxFiles = await Promise.all(
    filenames.map((filename) => parseMDXFile(filename, directoryPath))
  );
  return mdxFiles;
};

const parseMDXFile = async (filename: string, directory: string) => {
  const markdownFile = fs.readFileSync(path.join(directory, filename), "utf-8");
  const source = await serialize(markdownFile, {
    parseFrontmatter: true,
  });
  return {
    meta: source.frontmatter as Meta,
    slug: filename.replace(/\.mdx$/, ""),
    source,
  };
};

export const getAllProjects = async (): Promise<Project[]> => {
  const files = (await getMDXFiles(PROJECTS_FILE_PATH)) as Project[];
  return files.sort((a, b) => a.meta.priority - b.meta.priority);
};

export const getAllBlogPosts = async (): Promise<Blog[]> => {
  const files = (await getMDXFiles(BLOGS_FILE_PATH)) as Blog[];
  return files.sort((a, b) => b.meta.date - a.meta.date);
};

export const getProject = async (slug: string): Promise<Project> => {
  console.log(process.cwd());
  return (await parseMDXFile(`${slug}.mdx`, PROJECTS_FILE_PATH)) as Project;
};

export const getBlogPost = async (slug: string): Promise<Blog> => {
  return (await parseMDXFile(`${slug}.mdx`, BLOGS_FILE_PATH)) as Blog;
};

import fs from "fs";
import path from "path";
import { Meta, Project, Blog } from "./types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const PROJECTS_FILE_PATH = "src/content/projects";
const BLOGS_FILE_PATH = "src/content/blog";

const getMDXFiles = async (directoryPath: string) => {
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
    pre: (props: React.HTMLProps<HTMLPreElement>) => (
      <pre className="not-prose" {...props} />
    ),
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
            [
              // @ts-expect-error
              rehypePrettyCode,
              {
                theme: {
                  dark: "github-dark",
                  light: "github-light",
                },
              },
            ],
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

export const getAllProjects = async (): Promise<Project[]> => {
  const files = (await getMDXFiles(PROJECTS_FILE_PATH)) as Project[];
  return files.sort((a, b) => a.meta.priority - b.meta.priority);
};

export const getAllBlogPosts = async (): Promise<Blog[]> => {
  const files = (await getMDXFiles(BLOGS_FILE_PATH)) as Blog[];
  return files
    .filter(
      (post) => process.env.NODE_ENV === "development" || !post.meta.draft
    )
    .sort((a, b) => b.meta.date - a.meta.date);
};

export const getProject = async (slug: string): Promise<Project> => {
  return (await parseMDXFile(`${slug}.mdx`, PROJECTS_FILE_PATH)) as Project;
};

export const getBlogPost = async (slug: string): Promise<Blog> => {
  return (await parseMDXFile(`${slug}.mdx`, BLOGS_FILE_PATH)) as Blog;
};

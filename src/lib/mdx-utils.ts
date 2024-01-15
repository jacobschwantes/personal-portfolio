import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

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

export const getAllProjects = async (): Promise<Project[]> =>
  (await getMDXFiles(PROJECTS_FILE_PATH)) as Project[];

export const getAllBlogPosts = async (): Promise<Blog[]> =>
  (await getMDXFiles(BLOGS_FILE_PATH)) as Blog[];

export const getProject = async (slug: string): Promise<Project> => {
  return (await parseMDXFile(`${slug}.mdx`, PROJECTS_FILE_PATH)) as Project;
};

export const getBlogPost = async (slug: string): Promise<Blog> => {
  return (await parseMDXFile(`${slug}.mdx`, BLOGS_FILE_PATH)) as Blog;
};

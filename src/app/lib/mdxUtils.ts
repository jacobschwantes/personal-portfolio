import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import type {ProjectMeta, Project} from "@customTypes/projectTypes"


const filepath = "src/content/projects";
export const getProjects = (): Project[] => {
  const files = fs.readdirSync(path.join(filepath));

  const projectFiles = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(filepath, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter as ProjectMeta,
      slug: filename.replace(".mdx", ""),
    };
  });
  return projectFiles;
};

export const getProject = async (slug: string) => {
  const markdownFile = fs.readFileSync(
    path.join(filepath, slug + ".mdx"),
    "utf-8"
  );

  const source = await serialize(markdownFile, {
    parseFrontmatter: true,
  });

  return {
    meta: source.frontmatter as ProjectMeta,
    slug,
    source
  };
};

import { MDXRemoteSerializeResult } from "next-mdx-remote";

type Project = {
  slug: string;
  meta: ProjectMeta;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

type Blog = {
  slug: string;
  meta: BlogMeta;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

type Meta = ProjectMeta | BlogMeta;

type ProjectMeta = {
  name: string;
  description: string;
  year: number;
  product: string;
  technolgies: string;
  tags: string[];
  img: string;
  assets: string[];
  live?: string;
  github?: string;
};

type BlogMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  img: string;
  assets: string[];
  slug: string;
};

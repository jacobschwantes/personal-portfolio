import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Project = {
  slug: string;
  meta: ProjectMeta;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

export type Blog = {
  slug: string;
  meta: BlogMeta;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};



export type ProjectMeta = {
  name: string;
  description: string;
  product: string;
  stack: string[];
  platform: string[];
  tags: string[];
  images: string[];
  demo?: string;
  repo?: string;
};

export type BlogMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  img: string;
};

export type Meta = ProjectMeta | BlogMeta;
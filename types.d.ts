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
  product: string;
  stack: string[];
  platform: string[];
  tags: string[];
  images: string[];
  demo?: string;
  repo?: string;
};

type BlogMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  img: string;
};
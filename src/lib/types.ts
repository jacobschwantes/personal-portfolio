import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { z } from "zod";

export const blogMetaScheme = z.object({
  title: z.string(),
  description: z.string(),
  date: z.number(),
  tags: z.array(z.string()),
  img: z.string(),
});

export const projectMetaScheme = z.object({
  priority: z.number(),
  name: z.string(),
  description: z.string(),
  product: z.string(),
  stack: z.array(z.string()),
  platform: z.array(z.string()),
  tags: z.array(z.string()),
  images: z.array(z.string()),
  demo: z.string().optional(),
  repo: z.string().optional(),
});

export const metaScheme = z.union([blogMetaScheme, projectMetaScheme]);

export type Project = {
  draft: boolean;
  slug: string;
  meta: z.infer<typeof projectMetaScheme>;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export type Blog = {
  draft: boolean;
  slug: string;
  meta: z.infer<typeof blogMetaScheme>;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export type Meta = z.infer<typeof metaScheme>;

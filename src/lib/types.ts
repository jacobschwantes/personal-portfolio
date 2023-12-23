import { z } from "zod";

export const blogMetaScheme = z.object({
  draft: z.boolean(),
  title: z.string(),
  description: z.string(),
  date: z.number(),
});

export const projectMetaScheme = z.object({
  draft: z.boolean(),
  priority: z.number(),
  name: z.string(),
  description: z.string(),
  product: z.string(),
  stack: z.array(z.string()),
  platform: z.array(z.string()),
  images: z.array(z.string()),
  demo: z.string().optional(),
  repo: z.string().optional(),
});

export const metaScheme = z.union([blogMetaScheme, projectMetaScheme]);

export type Project = {
  slug: string;
  meta: z.infer<typeof projectMetaScheme>;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

export type Blog = {
  slug: string;
  meta: z.infer<typeof blogMetaScheme>;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

export type Meta = z.infer<typeof metaScheme>;

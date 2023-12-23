export type Project = {
  slug: string;
  meta: ProjectMeta;
  content?: string;
};

export type ProjectMeta = {
  name: string;
  description: string;
  year: number;
  product: string;
  technolgies: string;
  img: string;
  assets: string[];
  live?: string;
  github?: string;
};


export type BlogPost = {
  slug: string;
  meta: BlogMeta;
  source: any;
};

export type BlogMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};
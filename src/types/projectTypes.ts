export type Project = {
  slug: string;
  meta: Meta;
  content?: string;
};

export type Meta = {
  name: string;
  description: string;
  year: number;
  product: string;
  technolgies: string;
  img: string;
  live?: string;
  github?: string;
};

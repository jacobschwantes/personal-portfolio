export type Project = {
  slug: string;
  meta: Meta;
  content?: string;
  blurData?: string;
};

export type Meta = {
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

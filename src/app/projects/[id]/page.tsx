import type { NextPage } from "next";
import path from "path";
import fs from "fs";
import { getProject } from "@/lib/mdx-utils";
import MDXContent from "@/components/mdx-components";
import { ImageCarousel } from "@/components/ui/carousel";
import Projects from "@/components/projects";
import Link from "next/link";
import { GitHubLogoIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import SectionHeader from "@/components/section-header";

import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = await getProject(params.id);

  return {
    title: meta.name,
    openGraph: {
      images: [`/og/projects?id=${meta.name}&description=${meta.description}`],
    },
  };
}

interface PageProps {
  params: { id: string };
}
const Home: NextPage<PageProps> = async ({ params }) => {
  const { meta, source, slug, draft} = await getProject(params.id);

  return (
    <main className="flex flex-col py-8 gap-16 max-w-7xl mx-auto">
      {draft && (
        <div className="w-full">
          <SectionHeader title="This is a draft" />
        </div>
      )}
      <section className=" flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-start">
        <div className="space-y-2">
          <h1 className="md:text-3xl text-2xl  font-medium leading-tight text-zinc-900">
            {meta.name}
          </h1>
          <p className=" md:text-lg text-zinc-600">{meta.description}</p>
        </div>
      </section>
      <section className="flex flex-col gap-16">
        <ImageCarousel images={meta.images} />
      </section>
      <section>
        <div className="flex  gap-2">
          {meta.demo && (
            <Link
              target="_blank"
              className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 text-zinc-800 px-3 py-1.5 rounded-lg font-medium hover:bg-zinc-100 transition-all duration-300"
              href={meta.demo}
            >
              <LightningBoltIcon className="w-4 h-4" /> Demo
            </Link>
          )}
          {meta.repo && (
            <Link
              target="_blank"
              className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 text-zinc-800 px-3 py-1.5 rounded-lg font-medium hover:bg-zinc-100 transition-all duration-300 "
              href={meta.repo}
            >
              <GitHubLogoIcon className="  h-4 w-4 " /> Code
            </Link>
          )}
        </div>
      </section>
      <section className="prose max-w-none prose-headings:font-medium">
        <MDXContent source={source} />
      </section>
      <section className=" border-zinc-200 flex flex-col items-start py-6 gap-16 ">
        <div className="flex justify-between items-start w-full">
          <div className="grid grid-cols-2 w-auto flex-shrink gap-x-8 gap-y-1">
            <p className=" font-medium text-zinc-900">Platform</p>
            <p className="text-zinc-600 ">{meta.platform}</p>
            <p className=" font-medium text-zinc-900">Stack</p>
            <p className="text-zinc-600 ">{meta.stack}</p>
            <p className=" font-medium text-zinc-900">Tags</p>
            <p className="text-zinc-600 ">{meta.tags}</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <SectionHeader
            title="More projects"
            href="/projects"
            buttonLabel="All"
          />
          <Projects limit={2} />
        </div>
      </section>
    </main>
  );
};
export default Home;

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/content/projects"));
  return files.map((filename) => ({
    id: filename.replace(".mdx", ""),
  }));
}

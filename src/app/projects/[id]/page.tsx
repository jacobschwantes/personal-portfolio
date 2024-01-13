import type { NextPage } from "next";
import path from "path";
import fs from "fs";
import { getProject } from "@/lib/mdx-utils";
import MDXContent from "@/components/mdx";
import Link from "next/link";
import { WindowIcon } from "@heroicons/react/24/solid";
import ScrollToButton from "@/components/ui/scroll-to-button";
import { ImageCarousel } from "@/components/ui/carousel";
const GithubIcon = (props: { className: string }) => (
  <svg fill="currentColor" {...props} viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
interface PageProps {
  params: { id: string };
}
const Home: NextPage<PageProps> = async ({ params }) => {
  const { meta, source, slug } = await getProject(params.id);

  return (
    <main className="flex min-h-screen flex-col justify-between py-24 max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-24">
        <section className=" flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between">
          <div className="text-left max-w-4xl space-y-10 md:space-y-14 ">
            <span className="space-y-4">
              <h1 className="md:text-4xl text-2xl  font-medium leading-tight">
                {meta.name}
              </h1>
              <p className=" md:text-lg font-light">
                {meta.description}
              </p>
            </span>
            <div className="flex flex-col md:flex-row md:space-x-20 md:text-lg space-y-5 md:space-y-0">
              <span className="md:space-y-4 space-y-1">
                <h2 className=" md:font-medium md:text-2xl ">Year</h2>
                <p className=" font-light">{meta.year}</p>
              </span>
              <span className="md:space-y-4 space-y-1">
                <h2 className=" md:font-medium md:text-2xl ">
                  Product
                </h2>
                <p className=" font-light">{meta.product}</p>
              </span>
              <span className="md:space-y-4 space-y-1">
                <h2 className=" md:font-medium md:text-2xl ">
                  Technologies
                </h2>
                <p className=" font-light">{meta.technolgies}</p>
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            {meta.github && (
              <Link
                target="_blank"
                rel="noreferrer"
                className={"bg-zinc-800 rounded-full p-3 group"}
                href={meta.github}
              >
                <GithubIcon className="w-5 h-5 text-zinc-500 group-hover:text-blue-600 transition-colors duration-300" />
              </Link>
            )}
            {meta.live && (
              <Link
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-800 rounded-full p-3 group"
                href={meta.live}
              >
                <WindowIcon className="w-5 h-5 text-zinc-500 group-hover:text-blue-600 transition-colors duration-300" />
              </Link>
            )}
          </div>
        </section>
        <section>
          <ImageCarousel />
        </section>
        <section className="space-y-2 md:space-y-6 prose max-w-none prose-headings:font-medium">
          <MDXContent source={source} />
        </section>
        <section className="w-full">
          <ScrollToButton element="#top" duration={1000}>
            Scroll to top
          </ScrollToButton>
        </section>
      </div>
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

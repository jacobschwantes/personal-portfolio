import SectionHeader from "../components/SectionHeader";
import { getProjects } from "../lib/mdxUtils";

export const metadata = {
  title: "Jacob Schwantes — Projects",
  description: "Take a deep dive into some of my favorite projects.",
  openGraph: {
    images: ["/og?tagline=Projects"],
    title: "Jacob Schwantes — Projects",
    description: "Take a deep dive into some of my favorite projects.",
    url: `https://jsch.me/projects`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Schwantes — Projects",
    description: "Take a deep dive into some of my favorite projects.",
    creator: "@jacobschwantes",
    images: ["/og?tagline=Projects"],
  },
};
export default async function Home() {
  const projects = getProjects();

  return (
    <main className="text-white">
      <section className="gap-3 flex flex-col">
        <SectionHeader
          title="Projects"
        />
        <ul className="grid grid-cols-1 gap-2">
          {projects.map(({ meta }) => (
            <li
              className="flex items-center gap-3 group hover:bg-neutral-700/10 transition-all  p-2 cursor-pointer rounded-md"
              key={meta.name}
            >
              <span className="  block bg-yellow-400 h-[75%] my-auto w-[1px] rounded-full"></span>
              <div className="flex justify-between gap-5 w-full">
                <div>
                  <h3 className="font-medium text-zinc-200 ">{meta.name}</h3>
                  <p className="text-zinc-400 text-sm whitespace-break-spaces">
                    {meta.product}
                  </p>
                </div>
                <div className="flex flex-col flex-1 justify-between items-end  text-zinc-200 ">
                  <time>2023</time>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

import Image from "next/image";
import Socials from "./components/Socials";
import { getProjects } from "./lib/mdxUtils";
import Link from "next/link";
import SectionHeader from "./components/SectionHeader";

export const metadata = {
  title: "Jacob Schwantes",
  description:
    "Transforming complex problems into simple, elegant, and engaging digital experiences",
};

// const projects = [
//   {
//     name: "ShotSandbox",
//     description: "Browser-based mockup editor.",
//     icon: "/shotsandbox.ico",
//   },
//   {
//     name: "Screenshotify",
//     description: "Screenshot API microservice.",
//     icon: "/screenshotify.png",
//   },

const blogPosts = [
  {
    title: "How to use React Query with TypeScript",
    date: "Nov 1, 2021",
  },
  {
    title: "I built a mockup editor in React",
    date: "Nov 1, 2021",
  },
  {
    title: "My favorite VS Code extensions",
    date: "Nov 1, 2021",
  },
];

export default async function Home() {
  const projects = getProjects();
  return (
    <main className="gap-16 py-8 flex flex-col">
      <section className="text-zinc-300 flex flex-col gap-3">
        <p>intro/about</p>
      </section>

      <section className="gap-3 flex flex-col">
        <SectionHeader
          title="Projects"
          href="/projects"
          buttonLabel="All projects"
        />
        <ul className="grid grid-cols-2 gap-2">
          {projects.map(({meta}) => (
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

      <section className="gap-3 flex flex-col">
        <SectionHeader title="Blog" href="/blog" buttonLabel="All posts" />
        <ul className="grid">
          {blogPosts.map((post) => (
            <li className="flex justify-between items-center gap-3 group hover:bg-neutral-700/10 transition-all  p-2  rounded-md cursor-pointer">
              <span className="  block bg-yellow-400 h-[75%] my-auto w-[1px] rounded-full"></span>{" "}
              <div className="flex justify-between gap-2 w-full ">
                <h3 className="text-zinc-300">{post.title}</h3>
                <span className="  block bg-yellow-400 h-[75%] my-auto w-[1px] rounded-full"></span>
                <time className="text-zinc-300">{post.date}</time>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


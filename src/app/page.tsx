import Projects from "../components/projects";
import Socials from "../components/social-links";
import { getProjects } from "@/lib/mdx-utils";
import SectionHeader from "../components/section-header";
import Blogs from "@/components/blogs";

export default async function Home() {
  const projectFiles = await getProjects();
  return (
    <main className="flex flex-col md:gap-[--gap] gap-[--gap-sm] max-w-7xl mx-auto w-full xl:px-0 px-4">
      <section className="flex lg:justify-between  lg:text-left  items-start md:gap-12 gap-4  w-full flex-col lg:flex-row">
        <div className="gap-2 flex flex-col justify-between">
          <h1 className="xl:text-8xl sm:text-7xl text-5xl text-zinc-950 font-medium lg:whitespace-pre tracking-tighter">
            Jacob Schwantes
          </h1>
          <h2 className="xl:text-5xl sm:text-4xl text-2xl text-zinc-600 whitespace-pre">
            Software Engineer
          </h2>
        </div>
        <div className="lg:text-right md:max-w-lg max-w-none gap-4 flex flex-col justify-between h-full w-full lg:items-end lg:pt-2">
          <p className="text-zinc-800 md:text-2xl sm:text-xl text-lg w-full">
            Transforming complex problems into simple, elegant, and engaging
            digital experiences.
          </p>
          <Socials />
        </div>
      </section>
      <section className="">
        <SectionHeader
          title="Projects"
          buttonLabel="All projects"
          href="/projects"
        />
        <Projects limit={4} files={projectFiles} />
      </section>
      <section className="">
        <SectionHeader title="Blog" buttonLabel="All posts" href="/blog" />
        <Blogs limit={3} />
      </section>
    </main>
  );
}

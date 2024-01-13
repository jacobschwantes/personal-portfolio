import Projects from "../components/projects";
import Socials from "../components/social-links";
import { getProjects } from "@/lib/mdx-utils";
import SectionHeader from "../components/section-header";

export default async function Home() {
  const projectFiles = await getProjects();
  return (
    <main className="flex flex-col gap-y-12 max-w-7xl mx-auto w-full ">
      <section className="flex justify-between items-center gap-10 w-full py-14">
        <div>
          <h1 className="text-8xl text-zinc-950 font-medium whitespace-pre tracking-tighter">
            Jacob Schwantes
          </h1>
          <h2 className="text-4xl text-zinc-600 whitespace-pre">
            Software Engineer
          </h2>
        </div>
        <div className="text-right  gap-3 flex flex-col justify-between w-full items-end pt-4">
          <p className="text-zinc-800  text-2xl w-full">
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
    </main>
  );
}

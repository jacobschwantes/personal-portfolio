import { PageHeader } from "@/components/page-header";
import Projects from "../../components/projects";
import { getProjects } from "@/lib/mdx-utils";

export default async function Home() {
  const projectFiles = await getProjects();
  return (
    <main className="flex flex-col max-w-7xl w-full mx-auto md:gap-[--gap] gap-[--gap-sm]">
      <PageHeader
        title="Projects"
        description="I love to write about my design and creation process whenever I get a chance. I post new content every week."
      />
      <section className=" md:px-4 px-2">
        <Projects files={projectFiles} />
      </section>
    </main>
  );
}

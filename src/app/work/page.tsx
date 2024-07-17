import Projects from "@/components/projects";
import SectionHeader from "@/components/section-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "Jacob Schwantes",
  title: "Jacob Schwantes | Projects",
  description:
    "Showcase of my notable work, exploring challenges and solutions.",
};  

export default function Home() {

  return (
    <main className="text-white">
      <section className="gap-3 flex flex-col">
        <SectionHeader title="Projects"/>
        <Projects />
      </section>
    </main>
  );
}

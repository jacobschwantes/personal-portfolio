import Projects from "@/components/projects";
import SectionHeader from "@/components/section-header";

export const metadata = {
title: "Projects | Jacob Schwantes",
description: "A collection of my personal projects.",
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

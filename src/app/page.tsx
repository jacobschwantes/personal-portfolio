import BlogPosts from "@/components/blog-posts";
import SectionHeader from "../components/section-header";
import Projects from "@/components/projects";

export const metadata = {
  title: "Jacob Schwantes",
  description:
    "Transforming complex problems into simple, elegant, and engaging digital experiences",
};

const blogPosts = [
  {
    title: "How to use React Query with TypeScript",
    date: "09-06-2023",
  },
  {
    title: "I built a mockup editor in React",
    date: "09-06-2023",
  },
  {
    title: "My favorite VS Code extensions",
    date: "09-06-2023",
  },
];

export default async function Home() {
  return (
    <main className="gap-16 py-8 flex flex-col">
      <section className="dark:text-zinc-300 flex flex-col gap-3">
        <p className="dark:text-zinc-300 text-zinc-800">
          Hi there, I'm Jacob. I'm an 22 y/o CS undergrad student. I like
          shuffling cards and building things. I enjoy language design, web
          development and I live on the terminal.
        </p>
      </section>

      <section className="gap-3 flex flex-col">
        <SectionHeader
          title="Projects"
          buttonLabel="View more"
          href="/projects"
        />
        <Projects />
      </section>

      <section className="gap-3 flex flex-col">
        <SectionHeader title="Blog" href="/blog" buttonLabel="All posts" />
        <BlogPosts />
      </section>
    </main>
  );
}

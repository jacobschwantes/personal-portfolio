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
          Hi, I&apos;m <strong>Jacob</strong>, a 22-year-old CS undergraduate
          student at the{" "}
          <span className=" border-b-2 border-zinc-200">
            University of Minnesota
          </span>
          . I have a passion for <strong>Formula 1</strong> and enjoy building
          things. My interests include{" "}
          <span className="border-b-2 border-zinc-200">interaction design</span>
          , web development, and cloud computing.
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

import BlogPosts from "@/components/blog-posts";
import SectionHeader from "../components/section-header";
import Projects from "@/components/projects";
import Link from "next/link";

export const metadata = {
  applicationName: "Jacob Schwantes",
  title: "Jacob Schwantes",
  description: "Showcasing my notable work and writings on technology.",
};

const UnderlineLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link target="_blank" href={href} className="border-b-2 border-zinc-200">
    {children}
  </Link>
);
export default async function Home() {
  return (
    <main className="gap-16 py-8 flex flex-col">
      <section className="dark:text-zinc-300 flex flex-col gap-3">
        <p className="dark:text-zinc-300 text-zinc-800">
          Hi, I&apos;m <strong>Jacob</strong>, currently studying{" "}
          <strong>Computer Science</strong> at the{" "}
          <UnderlineLink href="https://twin-cities.umn.edu/">
            University of Minnesota
          </UnderlineLink>
          . Much like my fascination with <strong>Formula 1</strong>, I enjoy
          delving into the intricacies of technology, particularly in building
          complex software systems. My interests primarily lie in interaction
          design, web development, and cloud computing.
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

      {/* <section className="gap-3 flex flex-col">
        <SectionHeader title="Blog" href="/blog" buttonLabel="All posts" />
        <BlogPosts />
      </section> */}
    </main>
  );
}

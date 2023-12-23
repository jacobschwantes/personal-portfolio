import BlogPosts from "@/components/blog-posts";
import SectionHeader from "@/components/section-header";
import type { NextPage } from "next";
interface PageProps {}

export const metadata = {
  title: "Blog | Jacob Schwantes",
  description: "Writings on my explorations into the intersection of programming, design, and innovation.",
};

const Page: NextPage<PageProps> = ({}) => {
  return (
    <main className="">
      <section className="gap-3 flex flex-col">
        <SectionHeader title="Blog" />
        <BlogPosts />
      </section>
    </main>
  );
};
export default Page;




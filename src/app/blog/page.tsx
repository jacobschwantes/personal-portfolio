import BlogPosts from "@/components/blog-posts";
import SectionHeader from "@/components/section-header";
import type { Metadata, NextPage } from "next";
interface PageProps {}

export const metadata: Metadata = {
  applicationName: "Jacob Schwantes",
  title: "Blog",
  description: "Exploring my projects, workflow, and perspectives on technology.",
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




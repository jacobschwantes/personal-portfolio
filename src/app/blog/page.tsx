import Link from "next/link";
import { getBlogs } from "@/lib/mdx-utils";
import { PageHeader } from "@/components/page-header";
import Blogs from "@/components/blogs";
export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="flex flex-col md:gap-[--gap] gap-[--gap-sm] max-w-7xl w-full mx-auto">
      <PageHeader
        title="Blog"
        description="I love to write about my design and creation process whenever I get a chance. I post new content every week."
      />
      <section className="flex flex-col ">
        <Blogs />
      </section>
    </main>
  );
}

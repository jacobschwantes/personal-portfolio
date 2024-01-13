import type { NextPage } from "next";
import path from "path";
import fs from "fs";
import { getBlog } from "@/lib/mdx-utils";
import MDXContent from "@/components/mdx";
interface PageProps {
  params: { id: string };
}
const Home: NextPage<PageProps> = async ({ params }) => {
  const { meta, source, slug } = await getBlog(params.id);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section className=" prose prose-base mx-auto prose-headings:font-medium max-w-5xl">
        <MDXContent source={source} />
      </section>
    </main>
  );
};
export default Home;

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/content/blogs"));
  return files.map((filename) => ({
    id: filename.replace(".mdx", ""),
  }));
}

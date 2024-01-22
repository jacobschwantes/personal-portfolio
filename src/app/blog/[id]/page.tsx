import type { NextPage } from "next";
import path from "path";
import fs from "fs";
import { getBlogPost } from "@/lib/mdx-utils";
import MDXContent from "@/components/mdx-components";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
interface PageProps {
  params: { id: string };
}
const Home: NextPage<PageProps> = async ({ params }) => {
  const { meta, source, slug, draft } = await getBlogPost(params.id);

  return (
    <main className="flex flex-col py-8 gap-16 max-w-7xl mx-auto">
      {draft && (
        <div className="w-full">
          <SectionHeader title="This is a draft" />
        </div>
      )}
      <section className=" prose  mx-auto prose-headings:font-medium prose-headings:text-zinc-800 prose-sm max-w-5xl">
        <MDXContent source={source} />
      </section>
      <section className="flex flex-col gap-2">
        <SectionHeader title="Newsletter" />
        <NewsletterSubscribeForm />
      </section>
    </main>
  );
};
export default Home;

const NewsletterSubscribeForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <p className="text-zinc-600 ">Get notified when I publish new things.</p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/content/blog"));
  return files.map((filename) => ({
    id: filename.replace(".mdx", ""),
  }));
}

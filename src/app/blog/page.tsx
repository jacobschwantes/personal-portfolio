import Link from "next/link";
import { getBlogs } from "@/lib/mdx-utils";
export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <section className="flex flex-col ">
        <h1 className="">blogs</h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>{blog.slug}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

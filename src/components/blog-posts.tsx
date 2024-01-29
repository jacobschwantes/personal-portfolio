import { getAllBlogPosts } from "@/lib/mdx-utils";
import { NextPageContext, NextComponentType } from "next";
import Link from "next/link";

interface BlogPostsProps {
  limit?: number;
}
const BlogPosts: NextComponentType<
  NextPageContext,
  {},
  BlogPostsProps
> = async ({ limit }) => {
  const posts = await getAllBlogPosts();
  return (
    <ul className="grid group/list">
      {posts.slice(0, limit ?? posts.length).map(({ meta, slug }, i) => (
        <Link key={i} href={`/blog/${slug}`}>
          <li
            key={meta.title}
            className="flex justify-between items-center gap-3 md:group-hover/list:opacity-75 group/item md:hover:bg-zinc-100/50 md:dark:hover:bg-zinc-800/50 md:hover:!opacity-100 transition-all duration-200  p-2  rounded-md cursor-pointer -mx-2"
          >
            <div className="flex justify-between gap-2 w-full ">
              <h3 className="dark:text-zinc-300 text-zinc-800">{meta.title}</h3>

              <time className="dark:text-zinc-300 text-zinc-500">
                {new Date(meta.date).toLocaleDateString("en-US", {})}
              </time>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default BlogPosts;

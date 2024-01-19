import { getAllBlogPosts } from "@/lib/mdx-utils";
import { NextPageContext, NextComponentType } from "next";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to use React Query with TypeScript",
    date: 1704524974744,
  },
  {
    title: "I built a mockup editor in React",
    date: 1694314934743,
  },

  {
    title: "My favorite VS Code extensions",
    date: 1705534476744,
  },
];
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
      {blogPosts.slice(0, limit ?? blogPosts.length).map((post, i) => (
        <Link key={i} href="/blog/demo">
          <li
            key={post.title}
            className="flex justify-between items-center gap-3 group-hover/list:opacity-75 group/item hover:bg-zinc-100/50 hover:!opacity-100 transition-all duration-200  p-2  rounded-md cursor-pointer -mx-2"
          >
            <div className="flex justify-between gap-2 w-full ">
              <h3 className="dark:text-zinc-300 text-zinc-800">{post.title}</h3>

              <time className="dark:text-zinc-300 text-zinc-500">
                {new Date(post.date).toLocaleDateString("en-US", {})}
              </time>
            </div>
          </li>{" "}
        </Link>
      ))}
    </ul>
  );
};
export default BlogPosts;

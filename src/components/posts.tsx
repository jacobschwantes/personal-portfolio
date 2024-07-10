import { getPosts } from "@/lib/mdx-utils";
import Link from "next/link";

interface PostsProps {
	limit?: number;
}
async function Posts({ limit }: Readonly<PostsProps>) {
	const posts = await getPosts();
	return (
		<ul className="grid group/list">
			{posts.slice(0, limit ?? posts.length).map(({ meta, slug }, i) => (
				<Link key={slug} href={`/blog/${slug}`}>
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
}
export default Posts;

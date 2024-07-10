import type { Metadata } from "next";
import { getPostById, getPosts } from "@/lib/mdx-utils";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomLink from "@/components/ui/link";
interface PageProps {
	params: { id: string };
}

export async function generateMetadata({
	params,
}: Readonly<PageProps>): Promise<Metadata> {
	const { meta } = await getPostById(params.id);

	return {
		title: `${meta.title} | Jacob Schwantes`,
		description: meta.description,
		openGraph: {
			images: [`/og/blog?title=${meta.title}`],
		},
	};
}
async function Home({ params }: Readonly<PageProps>) {
	const { meta, content } = await getPostById(params.id);

	return (
		<main className="flex flex-col py-8 gap-16 max-w-7xl mx-auto">
			{meta.draft && (
				<div className="w-full">
					<SectionHeader title="This is a draft" />
				</div>
			)}
			<section className=" prose mx-auto dark:prose-invert prose-headings:font-medium dark:prose-headings:text-zinc-200 prose-headings:text-zinc-800 prose-sm max-w-5xl">
				{content}
			</section>

			<section className="flex flex-col gap-2">
				<SectionHeader title="Newsletter" />
				<NewsletterSubscribeForm />
			</section>
			<CustomLink href="/blog" label="Back" reverse />
		</main>
	);
}
export default Home;

function NewsletterSubscribeForm() {
	return (
		<form className="flex flex-col gap-5">
			<p className="text-zinc-600 dark:text-zinc-300 ">
				Get notified when I publish new things.
			</p>
			<div className="flex w-full max-w-sm items-center space-x-2">
				<Input type="email" placeholder="Email" />
				<Button type="submit">Subscribe</Button>
			</div>
		</form>
	);
}

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map(({ slug }) => ({
		id: slug,
	}));
}

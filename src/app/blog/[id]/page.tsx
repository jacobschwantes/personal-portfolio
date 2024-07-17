import type { Metadata } from "next";
import { getPostById, getPosts } from "@/lib/mdx-utils";
import SectionHeader from "@/components/section-header";
import CustomLink from "@/components/ui/link";
import { NewsletterSubscribeForm } from "@/components/newsletter-form";
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
			<section className="prose mx-auto dark:prose-invert prose-headings:font-medium dark:prose-headings:text-zinc-200 prose-headings:text-zinc-800 prose-sm max-w-5xl">
				{content}
			</section>

			<section className="flex flex-col gap-2">
				<SectionHeader title="Newsletter" />
				<NewsletterSubscribeForm />
			</section>
			<CustomLink href="/blog" label="back" reverse />
		</main>
	);
}
export default Home;


export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map(({ slug }) => ({
		id: slug,
	}));
}

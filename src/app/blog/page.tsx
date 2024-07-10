import Posts from "@/components/posts";
import SectionHeader from "@/components/section-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	applicationName: "Jacob Schwantes",
	title: "Jacob Schwantes | Blog",
	description:
		"Exploring my projects, workflow, and perspectives on technology.",
};

function Page() {
	return (
		<main className="">
			<section className="gap-3 flex flex-col">
				<SectionHeader title="Blog" />
				<Posts />
			</section>
		</main>
	);
}
export default Page;

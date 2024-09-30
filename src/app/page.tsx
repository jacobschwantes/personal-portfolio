import Posts from "@/components/posts";
import SectionHeader from "../components/section-header";
import Projects from "@/components/projects";
import Link from "next/link";

export const metadata = {
	applicationName: "Jacob Schwantes",
	title: "Jacob Schwantes",
	description: "Showcasing my notable work and writings on technology.",
};

const UnderlineLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<Link target="_blank" href={href} className="border-b-2 border-zinc-200">
		{children}
	</Link>
);
export default async function Home() {
	return (
		<main className="gap-16 py-8 flex flex-col">
			<section className="dark:text-zinc-300 flex flex-col gap-3">
				<p className="dark:text-zinc-300 text-zinc-800">
					Hi, I&apos;m <strong>Jake</strong>, currently studying{" "}
					<strong>Computer Science</strong> at the{" "}
					<UnderlineLink href="https://twin-cities.umn.edu/">
						University of Minnesota
					</UnderlineLink>
					. When I&apos;m not watching Formula 1 🏎️, lifting weights 🏋🏻, or
					cooking 👨🏻‍🍳, I&apos;m probably building something cool with software
					😎.
				</p>
				<p className="dark:text-zinc-300 text-zinc-800">
					I&apos;m obsessively detail-oriented and passionate about crafting
					engaging product experiences. My main areas of interest include design
					engineering, web development, and distributed systems.
				</p>
			</section>

			<section className="gap-4 flex flex-col">
				<SectionHeader
					title="Projects"
					buttonLabel="View more"
					href="/projects"
				/>
				<Projects limit={2} />
			</section>

			<section className="gap-1 flex flex-col">
				<SectionHeader title="Blog" href="/blog" buttonLabel="All posts" />
				<Posts />
			</section>
		</main>
	);
}

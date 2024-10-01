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
					Hi, I&apos;m <strong>Jake</strong>, a{" "}
					<strong>Computer Science</strong> student at the{" "}
					<UnderlineLink href="https://twin-cities.umn.edu/">
						University of Minnesota
					</UnderlineLink>
					. When I&apos;m not glued to Formula 1 🏎️, pumping iron 🏋🏻, or
					whipping up culinary creations 👨🏻‍🍳, I&apos;m building cool stuff with
					code. For me, it&apos;s not just a study—it&apos;s a lifestyle. 😎
				</p>
				<p className="dark:text-zinc-300 text-zinc-800">
					I love diving deep into my tech interests: design engineering, web
					development, and distributed systems. I&apos;d love to work with you or
					just chat, so feel free to reach out!
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

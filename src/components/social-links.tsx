import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const platforms = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/jacobschwantes/",
		icon: (props: { className: string }) => <LinkedInLogoIcon {...props} />,
	},

	{
		name: "GitHub",
		href: "https://github.com/jacobschwantes",
		icon: (props: { className: string }) => <GitHubLogoIcon {...props} />,
	},
];

function Socials() {
	return (
		<div className="flex gap-3 items-center">
			{platforms.map((platform) => (
				<Link
					key={platform.name}
					target="_blank"
					rel="noreferrer"
					aria-label={`Link to ${platform.name}`}
					className="group"
					href={platform.href}
				>
					<platform.icon className="w-5 h-5  text-zinc-400 md:dark:hover:text-zinc-300 transition-colors duration-300 hover:text-zinc-900" />
				</Link>
			))}
		</div>
	);
}
export default Socials;

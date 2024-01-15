import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { NextPageContext, NextComponentType } from "next";
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
interface SocialsProps {}
const Socials: NextComponentType<NextPageContext, {}, SocialsProps> = ({}) => (
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
        <platform.icon className="w-4 h-4  text-zinc-400 transition-colors duration-300 hover:text-zinc-900" />
      </Link>
    ))}
  </div>
);
export default Socials;

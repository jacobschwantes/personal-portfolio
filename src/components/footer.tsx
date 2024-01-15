import { NextComponentType, NextPageContext } from "next";
import Socials from "@/components/social-links";

interface FooterProps {}

const Footer: NextComponentType<NextPageContext, {}, FooterProps> = ({}) => (
  <footer className="flex justify-between items-center gap-x-3 py-8  dark:text-zinc-300 text-zinc-500 text-xs">
    <div className="">
      &copy; <time>2024</time>
      <span> JSCH</span>
    </div>
    <Socials />
  </footer>
);

export default Footer;



import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import Socials from "./social-links";

interface FooterProps {}

const Footer: NextComponentType<NextPageContext, {}, FooterProps> = ({}) => (
  <footer className="mx-auto flex justify-between items-center w-full max-w-7xl md:py-10 py-6">
    <div className=" text-zinc-600 font-medium">
      &copy;<time>2023</time>
      <span className="uppercase"> Jacob Schwantes </span>
    </div>
    <Socials />
  </footer>
);

export default Footer;

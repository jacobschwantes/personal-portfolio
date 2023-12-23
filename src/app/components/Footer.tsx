import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import Socials from "./Socials";

interface FooterProps {}

const Footer: NextComponentType<NextPageContext, {}, FooterProps> = ({}) => (
  <footer className="flex justify-between items-center gap-x-3 py-8 text-zinc-400 text-xs ">
    <small className="text-xs">
      &copy; <time>2023</time>{" "}
      <span className="text-zinc-300">Jacob Schwantes</span>
    </small>
    <Socials />
  </footer>
);

export default Footer;

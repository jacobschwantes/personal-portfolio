import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import Socials from "./Socials";

interface FooterProps {}

const Footer: NextComponentType<NextPageContext, {}, FooterProps> = ({}) => (
  <footer className=" md:px-32 px-6 ">
    <div className="mx-auto flex justify-between items-center border-t-2 border-zinc-900 py-6">
      <Link className="text-2xl font-bold" href="/">
        JSCH
      </Link>
      <Socials />
    </div>
  </footer>
);

export default Footer;

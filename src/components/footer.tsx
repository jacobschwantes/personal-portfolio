import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import Socials from "./social-links";

interface FooterProps {}

const Footer: NextComponentType<NextPageContext, {}, FooterProps> = ({}) => (
  <footer className="mx-auto flex justify-between items-center w-full">
    <Link className="text-2xl font-bold" href="/">
      JSCH
    </Link>
    <Socials />
  </footer>
);

export default Footer;

"use client";
import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import Socials from "./social-links";
import { Navigation } from "./page-header";
import { usePathname } from "next/navigation";

interface FooterProps {}

const Footer: NextComponentType<NextPageContext, {}, FooterProps> = ({}) => {
  const pathname = usePathname();
  return (
    <footer className=" w-full border-t border-zinc-200 md:py-8 py-4 px-4 xl:px-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-5 w-full">
        <div className=" text-zinc-800 order-2 sm:order-none font-medium flex-1">
          &copy;<time>2023</time>
          <span className=""> JSCH </span>
        </div>
        <div className="flex-1">
          <Navigation activePath={pathname} />
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;

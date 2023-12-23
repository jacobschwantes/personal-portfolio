"use client";
import clsx from "clsx";
import { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ComponentProps {}
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const Header: NextComponentType<NextPageContext, {}, ComponentProps> = ({}) => {
  const pathname = usePathname();
  return (
    <header className=" py-8 flex justify-between items-center ">
      {/* <Link className="text-lg font-medium text-zinc-100" href="/">
        JSCH
      </Link> */}
      <div className="flex gap-3 items-center">
        <div className="h-12 rounded-full aspect-square relative overflow-hidden">
          <Image
            alt="profile picture"
            className="w-full h-full"
            src="https://avatars.githubusercontent.com/u/74641690?v=4"
            fill
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-zinc-200 font-medium">Jacob Schwantes</h1>
          <p className="text-zinc-400 text-sm">Software Engineer</p>
        </div>
      </div>
      <nav className="md:flex hidden space-x-10">
        <ul className="flex gap-5 items-center">
          {routes.map((item) => (
            <li className="flex items-center gap-5 group" key={item.name}>
              <Link
                className={clsx(
                  "hover:text-zinc-200 transition-colors duration-300 text-sm",
                  pathname === item.path ? "text-zinc-200" : "text-zinc-400"
                )}
                href={item.path}
              >
                {item.name}
              </Link>
              <span className="group-last:hidden  block bg-yellow-400 h-[10px] w-[1px] rounded-full "></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

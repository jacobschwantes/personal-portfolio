"use client";
import clsx from "clsx";
import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomLink from "./ui/link";

interface ComponentProps {}
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Header: NextComponentType<NextPageContext, {}, ComponentProps> = ({}) => {
  const pathname = usePathname();
  return (
    <header className=" py-8 flex justify-between items-center ">
      {pathname === "/" ? (
        <h1 className="dark:text-zinc-200 text-zinc-800 text-lg font-medium ">Jacob Schwantes</h1>
      ) : (
        <CustomLink href="/" label="Back" reverse />
      )}

      <nav className="md:flex hidden">
        <ul className="flex gap-5 items-center">
          {routes.map((item) => (
            <li className="flex items-center group" key={item.name}>
              <Link
                className={clsx(
                  "dark:hover:text-zinc-200 transition-colors duration-300   ",
                  pathname === item.path
                    ? "dark:text-zinc-200 text-zinc-900"
                    : "dark:text-zinc-400 text-zinc-700 hover:text-zinc-900"
                )}
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

"use client";
import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

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
    <header className="w-full  border-b border-zinc-200 md:py-8 py-6">
      <div className="w-full mx-auto max-w-7xl  flex justify-between items-center ">
        {/* <div className="h-10 rounded-full aspect-square relative overflow-hidden">
        <Image
          alt="profile picture"
          className="w-full h-full"
          src="https://avatars.githubusercontent.com/u/74641690?v=4"
          fill
          objectFit="cover"
        />
      </div> */}
        <div className="flex items-center gap-5">
          <div className="relative flex items-center">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-ping absolute z-10 block "></span>
            <span className="h-2.5 w-2.5  rounded-full bg-green-400  absolute  block "></span>
          </div>
          <p className="text-zinc-900">Seeking new grad roles</p>
        </div>
        <nav className="md:flex hidden space-x-10">
          <ul className="flex gap-5 items-center">
            {routes.map((item) => (
              <li key={item.name}>
                <Link
                  className="uppercase text-zinc-800  text-sm flex flex-col items-center group "
                  href={item.path}
                >
                  {item.name}
                  <span
                    className={clsx(
                      "block h-[1px] w-full bg-zinc-700 transition-all duration-300 ease-out",
                      pathname === item.path ? "scale-x-95" : "group-hover:scale-x-95 scale-x-0"
                    )}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          {/* TODO: Make mobile nav */}
        </div>
      </div>
    </header>
  );
};

export default Header;

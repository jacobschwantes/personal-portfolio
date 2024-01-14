"use client";
import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <header className="w-full  border-b border-zinc-200 md:py-8 py-4 px-4 xl:px-0">
      <div className="w-full mx-auto max-w-7xl  flex justify-between items-center ">
        <div className="flex gap-3 items-center">
          <div className="h-8 rounded-full aspect-square relative overflow-hidden">
            <Image
              alt="profile picture"
              className="w-full h-full"
              src="https://avatars.githubusercontent.com/u/74641690?v=4"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <Navigation activePath={pathname} />

        <div className="md:hidden">{/* TODO: Make mobile nav */}</div>
      </div>
    </header>
  );
};

export const Navigation = ({ activePath }: { activePath?: string }) => (
  <nav className="gap-5">
    <ul className="flex gap-5 items-center">
      {routes.map((item) => (
        <li key={item.name}>
          <Link
            className={cn(
              "rounded-full px-3 py-0.5 font-medium border text-zinc-800 transition-colors duration-300 ease-out",
              activePath === item.path
                ? "border-zinc-800"
                : "hover:border-zinc-800 border-white"
            )}
            href={item.path}
          >
            {item.name}
            {/* <span
                    className={clsx(
                      "block h-[1px] w-full bg-zinc-700 transition-all duration-300 ease-out",
                      pathname === item.path ? "scale-x-95" : "group-hover:scale-x-95 scale-x-0"
                    )}
                  ></span> */}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <section className="flex justify-between w-full">
    <h1 className="xl:text-8xl sm:text-7xl text-5xl text-zinc-950 font-medium lg:whitespace-pre tracking-tighter">
      {title}
    </h1>
    <div className="md:max-w-md max-w-none gap-4 flex flex-col justify-between h-full w-full lg:items-end">
      <p className="text-zinc-800  sm:text-xl text-lg w-full ">
        {description}
      </p>
    </div>
  </section>
);
export default Header;

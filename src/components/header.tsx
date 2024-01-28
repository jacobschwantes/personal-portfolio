"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomLink from "./ui/link";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
  // {
  //   name: "Blog",
  //   path: "/blog",
  // },
];

const Header: NextComponentType<NextPageContext, {}, ComponentProps> = ({}) => {
  const pathname = usePathname();
  return (
    <header className=" py-8 flex justify-between items-center ">
      {pathname === "/" ? (
        <h1 className="dark:text-zinc-200 text-zinc-800 text-lg font-medium ">
          Jacob Schwantes
        </h1>
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
                    : "dark:text-zinc-300 text-zinc-700 hover:text-zinc-900"
                )}
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="md:hidden">
        <DropdownMenuRadioGroupDemo active={pathname} />
      </nav>
    </header>
  );
};

export default Header;

export function DropdownMenuRadioGroupDemo({ active }: { active: string }) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon className="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={active}>
          {routes.map(({ name, path }) => (
            <Link key={name} href={path}>
              <DropdownMenuRadioItem value={path}>{name}</DropdownMenuRadioItem>
            </Link>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

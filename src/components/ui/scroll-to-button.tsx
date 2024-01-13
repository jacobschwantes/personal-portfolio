"use client";
import { NextPageContext, NextComponentType } from "next";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
interface ScrollToButtonProps {
  element: string;
  duration?: number;
  children?: React.ReactNode;
}
const ScrollToButton: NextComponentType<
  NextPageContext,
  {},
  ScrollToButtonProps
> = ({ element, duration = 1000, children }) => (
  <button
    aria-label="Scroll to top"
    className="flex flex-col items-center justify-center mx-auto text-zinc-400"
    onClick={() =>
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }
  >
    <span>
      <ArrowUpIcon className="h-6 w-6" />
    </span>
    {children}
  </button>
);
export default ScrollToButton;

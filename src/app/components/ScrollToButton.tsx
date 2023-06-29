"use client";
import { NextPageContext, NextComponentType } from "next";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
interface ScrollToButtonProps {
  element: string;
  duration?: number;
  children?: React.ReactNode;
}
const variants = {
  hover: {
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        yoyo: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  },
};
const ScrollToButton: NextComponentType<
  NextPageContext,
  {},
  ScrollToButtonProps
> = ({ element, duration = 1000, children }) => (
  <motion.button
    aria-label="Scroll to top"
    whileHover="hover"
    className="flex flex-col items-center justify-center mx-auto text-zinc-400"
    onClick={() =>
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }
  >
    <motion.span variants={variants}>
      <ArrowUpIcon className="h-6 w-6" />
    </motion.span>
    {children}
  </motion.button>
);
export default ScrollToButton;

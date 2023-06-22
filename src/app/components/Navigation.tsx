"use client";
import { NextPageContext, NextComponentType } from "next";
import {
  AnimatePresence,
  MotionAdvancedProps,
  MotionProps,
  motion,
} from "framer-motion";
import { SetStateAction, useRef, useState } from "react";
import Link from "next/link";
const variants = {
  open: {
    opacity: 1,
    height: 180,
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
  },
};
const childVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};
interface NavigationProps {
  routes: {
    name: string;
    path: string;
  }[];
}

const Navigation: NextComponentType<NextPageContext, {}, NavigationProps> = ({
  routes,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav className="" initial={false} animate={open ? "open" : "closed"}>
      <MenuIcon open={open} setOpen={setOpen} />
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="p-5 bg-black/80 rounded backdrop-blur-sm absolute top-16 left-0 right-0 overflow-hidden space-y-5 flex flex-col  items-center"
          >
            {routes.map(({ path, name }) => (
              <motion.li
                key={name}
                onClick={() => setOpen(false)}
                variants={childVariants}
              >
                <Link className="text-white text-xl rounded-lg" href={path}>
                  {name}
                </Link>
              </motion.li>
            ))}
            <motion.li onClick={() => setOpen(false)} variants={childVariants}>
              <Link className="text-white text-xl rounded-lg" href="/contact">
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const MenuIcon = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button onClick={() => setOpen(!open)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
export default Navigation;

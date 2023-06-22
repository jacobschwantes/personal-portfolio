"use client";
import { NextPageContext, NextComponentType } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
const CustomLink: NextComponentType<NextPageContext, {}, CustomLinkProps> = ({
  children,
  href,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}>
      <motion.span
        layout
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg  md:text-lg flex items-center space-x-2 cursor-pointer"
      >
        <motion.span layout>{children}</motion.span>
        {hovered && (
          <motion.div
            initial={{ scale: 0}}
            animate={{ scale: 1}}
            transition={{ ease: "easeOut" }}
          >
            <ArrowRightIcon className="h-5 text-white" />
          </motion.div>
        )}
      </motion.span>
    </Link>
  );
};
export default CustomLink;

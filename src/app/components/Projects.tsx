"use client";
import { NextPageContext, NextComponentType } from "next";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import type { Project } from "@customTypes/projectTypes";
import Image from "next/image";

const imgVariants = {
  rest: {
    scale: 1.1,
  },
  hover: { scale: 1.15 },
};
const taglineVariants = {
  rest: {
    bottom: -50,
  },
  hover: { bottom: 20 },
};

interface ProjectsProps {
  wide?: boolean;
  files: Project[];
  limit?: number;
}
const Projects: NextComponentType<NextPageContext, {}, ProjectsProps> = ({
  wide,
  files,
  limit,
}) => {
  const [hoverTarget, setHoverTarget] = useState("");
  return (
    <div
      className={clsx(
        wide ? "grid-cols-1" : "md:grid-cols-2 grid-cols-1",
        "grid gap-6"
      )}
    >
      {files.slice(0, limit ?? files.length).map((project, i) => (
        <Link key={project.slug} href={`projects/${project.slug}`}>
          <motion.div
            onHoverStart={() => setHoverTarget(project.meta.name)}
            onHoverEnd={() => setHoverTarget("")}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="border-2 border-zinc-900 rounded-[2rem] group cursor-pointer flex flex-col overflow-hidden h-[680px]"
          >
            <div className="flex justify-between px-6 py-8 text-2xl ">
              <div className="flex items-center md:space-x-2">
                {project.meta.name === hoverTarget && (
                  <motion.div
                    className="hidden md:block "
                    initial={{ scale: 0, x: 0 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ ease: "easeOut" }}
                  >
                    <ArrowRightIcon className="h-8 text-white rotate-[-45deg]" />
                  </motion.div>
                )}
                <motion.h2 key="project" layout className="">
                  {project.meta.name}
                </motion.h2>
              </div>
              <p className="">{project.meta.year}</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] relative flex-1 ">
              <div className="absolute inset-0 hidden md:block">
                <motion.div
                  className="h-full w-full overflow-hidden"
                  transition={{ ease: "easeOut" }}
                  variants={imgVariants}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL={project.blurData}
                    priority
                    fill
                    alt={`preview image of ${project.meta.name} project`}
                    className="object-cover h-full w-full "
                    src={project.meta.img}
                  />
                </motion.div>
              </div>
              <Image
                priority
                fill
                alt={`preview image of ${project.meta.name} project`}
                className="md:hidden object-cover"
                src={project.meta.img}
              />

              <motion.p
                style={{ left: 20 }}
                variants={taglineVariants}
                className="px-4 py-2 border border-zinc-800 rounded-full bg-black absolute hidden md:block"
              >
                {project.meta.product}
              </motion.p>
              <p
                style={{ left: 20, bottom: 20 }}
                className="px-4 py-2 border border-zinc-800 rounded-full bg-black absolute md:hidden"
              >
                {project.meta.product}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};
export default Projects;

"use client";
import { NextPageContext, NextComponentType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { circOut, motion, useSpring } from "framer-motion";
import { ReactNode } from "react";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";

import Image from "next/image";
interface mdxContentProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}
const springConfig = {
  stiffness: 300,
  damping: 50,
  restDelta: 0.0001,
};

const MDXContent: NextComponentType<NextPageContext, {}, mdxContentProps> = ({
  source,
}) => <MDXRemote {...source} components={MdxComponents} />;
export default MDXContent;

const MdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="md:text-4xl text-xl max-w-2xl" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="md:text-2xl text-lg text-zinc-100" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="text-zinc-300 md:text-lg font-light" {...props} />
  ),
  Grid: ({ children }: { children: ReactNode }) => (
    <div className="grid md:gap-24 gap-10 md:grid-cols-2 grid-cols-1">
      {children}
    </div>
  ),
  Block: ({ children }: { children: ReactNode }) => (
    <div className="space-y-4">{children}</div>
  ),
  Card: ({ children }: { children: ReactNode }) => <Card>{children} </Card>,
  Image: (props: { src: string; alt: string }) => <CustomImage {...props} />,
};
const CustomImage = (props: { src: string; alt: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [".1 1", "1 1"],
  });

  const scale = useSpring(
    useTransform(
      scrollYProgress,
      // Map y from these values:
      [0, 1],
      // Into these values:
      [0.5, 1],
      { ease: circOut }
    ),
    springConfig
  );

  const opacity = useSpring(
    useTransform(
      scrollYProgress,
      // Map y from these values:
      [0, 1],
      // Into these values:
      [0.3, 1],
      { ease: circOut }
    ),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(
      scrollYProgress,
      // Map y from these values:
      [0, 1],
      // Into these values:
      [-50, 0],
      { ease: circOut }
    ),
    springConfig
  );
  return (
    <motion.div
      ref={ref}
      style={{ scale, rotateX, opacity, transformPerspective: 1200 }}
      className="md:rounded-3xl rounded-xl overflow-hidden aspect-[16/9] w-full relative max-h-[800px] "
    >
      <Image
        fill
        src={props.src}
        alt={props.alt}
        className=" object-cover object-top"
      />
    </motion.div>
  );
};
const Card = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [".1 1", "1 1"],
  });

  const scale = useSpring(
    useTransform(
      scrollYProgress,
      // Map y from these values:
      [0, 1],
      // Into these values:
      [0.5, 1],
      { ease: circOut }
    ),
    springConfig
  );

  const opacity = useSpring(
    useTransform(
      scrollYProgress,
      // Map y from these values:
      [0, 1],
      // Into these values:
      [0.3, 1],
      { ease: circOut }
    ),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(
      scrollYProgress,
      // Map y from these values:
      [0, 1],
      // Into these values:
      [-50, 0],
      { ease: circOut }
    ),
    springConfig
  );
  return (
    <motion.div
      ref={ref}
      style={{ scale, rotateX, opacity, transformPerspective: 1200 }}
      className="md:rounded-3xl rounded-xl bg-zinc-900/70 border-zinc-900 border overflow-hidden w-full md:p-20 p-7 md:space-y-14 space-y-10"
    >
      {children}
    </motion.div>
  );
};

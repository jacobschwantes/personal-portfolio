"use client";
import { NextPageContext, NextComponentType } from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { MDXRemote } from "next-mdx-remote";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import { useEffect, useState } from "react";
interface mdxContentProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const MDXContent: NextComponentType<NextPageContext, {}, mdxContentProps> = ({
  source,
}) => {
  const [theme, setTheme] = useState(oneLight);
  // TODO: Re-enable once i setup dark mode colors for rest of site
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  //   const handleChange = (event: MediaQueryListEvent) => {
  //     setTheme(event.matches ? oneDark : oneLight);
  //   };

  //   // Add event listener
  //   mediaQuery.addEventListener("change", handleChange);

  //   // Clean up
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleChange);
  //   };
  // }, []);
  // TODO: prob need to just delete these and start over if needed
  const MdxComponents = {
    // h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    //   <h1 className="md:text-4xl text-xl max-w-2xl" {...props} />
    // ),
    // h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    //   <h2 className="md:text-2xl text-lg text-zinc-100" {...props} />
    // ),
    // p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    //   <p className="text-zinc-300 md:text-lg font-light" {...props} />
    // ),
    // Grid: ({ children }: { children: React.ReactNode }) => (
    //   <div className="grid md:gap-24 gap-10 md:grid-cols-2 grid-cols-1">
    //     {children}
    //   </div>
    // ),
    // Block: ({ children }: { children: React.ReactNode }) => (
    //   <div className="space-y-4">{children}</div>
    // ),
    // Card: ({ children }: { children: React.ReactNode }) => (
    //   <Card>{children} </Card>
    // ),
    Image: (props: { src: string; alt: string; path: string }) => (
      <CustomImage {...props} />
    ),

    // TODO: maybe ??? could add styling here to have a copy button + filename
    pre: (props: React.HTMLProps<HTMLPreElement>) => (
      <pre className="not-prose" {...props} />
    ),
    code: (props: SyntaxHighlighterProps) => {
      const match = /language-(\w+)/.exec(props.className || "");
      return match ? (
        <SyntaxHighlighter
          // showLineNumbers
          customStyle={{ borderRadius: "1rem", padding: "1.25rem" }}
          style={theme}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code {...props} />
      );
    },
  };
  const CustomImage = (props: { src: string; alt: string; path: string }) => {
    return (
      <div className="md:rounded-3xl rounded-xl overflow-hidden aspect-[16/9] w-full relative max-h-[800px] ">
        <Image
          fill
          src={props.src}
          alt={props.alt}
          className=" object-cover object-top"
        />
      </div>
    );
  };
  // @ts-expect-error
  return <MDXRemote {...source} components={MdxComponents} />;
};
export default MDXContent;

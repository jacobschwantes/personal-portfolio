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


import { NextPageContext, NextComponentType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { ReactNode } from "react";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";

import Image from "next/image";
interface mdxContentProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const MDXContent: NextComponentType<NextPageContext, {}, mdxContentProps> = ({
  source,
}) => {
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
    // Card: ({ children }: { children: ReactNode }) => <Card>{children} </Card>,
    Image: (props: { src: string; alt: string, path:string }) => <CustomImage {...props} />,
  };
  const CustomImage = (props: { src: string; alt: string, path: string }) => {

   
    return (
      <div
       
        className="md:rounded-3xl rounded-xl overflow-hidden aspect-[16/9] w-full relative max-h-[800px] "
      >
        <Image
        
          fill
          src={props.src}
          alt={props.alt}
          className=" object-cover object-top"
        />
      </div>
    );
  };


  return <MDXRemote {...source} components={MdxComponents} />;
};
export default MDXContent;


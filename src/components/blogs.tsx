import { cn } from "@/lib/utils";
import { NextPageContext, NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
interface BlogsProps {
  limit?: number;
}
const Blogs: NextComponentType<NextPageContext, {}, BlogsProps> = ({
  limit,
}) => (
  <ul
    className={"grid gap-8 sm:gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1"}
  >
    {Array.from({ length: 9 })
      .slice(0, limit)
      .map((_, i) => (
        <li key={i}>
          <BlogCard
            title={`Blog ${i + 1}`}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            date="Apr 8, 2022"
            slug="demo"
          />
        </li>
      ))}
  </ul>
);
export default Blogs;

const BlogCard = ({ title, description, date, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className=" group flex flex-col overflow-hidden w-full gap-4">
        <div className="overflow-hidden md:rounded-[2rem] rounded-3xl aspect-[5/4] w-full relative   ">
          <Image
            priority
            fill
            alt={`preview image of ${title} project`}
            className="object-cover h-full w-full  group-hover:saturate-125 group-hover:brightness-100 brightness-[99%] transition-all duration-500 ease-out group-hover:scale-[1.03]"
            src="/placeholder2.jpg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zinc-800 font-light md:text-base">{date}</p>
          <h3 className="font-medium md:text-3xl text-2xl ">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

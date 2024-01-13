import { NextPageContext, NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
interface BlogsProps {}
const Blogs: NextComponentType<NextPageContext, {}, BlogsProps> = ({}) => (
  <ul className="grid grid-cols-3 gap-8">
    <li>
      <BlogCard
        title="Blog 1"
        description="Blog 1 description"
        date="Apr 8, 2022"
        slug="blog-1"
      />
    </li>
    <li>
      <BlogCard
        title="Blog 2"
        description="Blog 2 description"
        date="Apr 8, 2022"
        slug="blog-2"
      />
    </li>
    <li>
      <BlogCard
        title="Blog 3"
        description="Blog 3 description"
        date="Apr 8, 2022"
        slug="blog-3"
      />
    </li>
  </ul>
);
export default Blogs;

const BlogCard = ({ title, description, date, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className=" group flex flex-col overflow-hidden w-full">
        <div className="overflow-hidden rounded-[2rem] h-80 w-full relative   ">
          <Image
            priority
            fill
            alt={`preview image of ${title} project`}
            className="object-cover h-full w-full  group-hover:saturate-125 group-hover:brightness-100 brightness-[99%] transition-all duration-500 ease-out group-hover:scale-[1.03]"
            src="/placeholder2.jpg"
          />
        </div>
        <div className="flex flex-col gap-2 py-5 ">
          <p className="text-zinc-800 font-light">{date}</p>
          <h3 className="font-medium text-3xl">{title}</h3>
          
        </div>
      </div>
    </Link>
  );
};

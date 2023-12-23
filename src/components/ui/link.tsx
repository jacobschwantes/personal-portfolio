import { cn } from "@/lib/utils";
import { NextPageContext, NextComponentType } from "next";
import Link from "next/link";
interface CustomLinkProps {
  href: string;
  label: string;
  reverse?: boolean;
}
const CustomLink: NextComponentType<NextPageContext, {}, CustomLinkProps> = ({
  label,
  href,
  reverse,
}) => (
  <Link
    className="whitespace-pre  dark:text-zinc-300 group flex items-center dark:hover:text-zinc-200 transition-all duration-300 text-zinc-700 hover:text-zinc-950 py-0.5"
    href={href}
  >
    <span className={reverse ? "order-2" : ""}>{label}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        "w-5 h-5   mt-0.5 transition-all duration-300",
        reverse
          ? "rotate-180 order-1 mr-0.5 group-hover:-translate-x-0.5 "
          : "ml-0.5 group-hover:translate-x-0.5"
      )}
    >
      <path
        fillRule="evenodd"
        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  </Link>
);
export default CustomLink;

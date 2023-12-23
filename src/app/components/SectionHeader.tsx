import { NextPageContext, NextComponentType } from "next";
import Link from "next/link";
interface SectionHeaderProps {
  title: string;
  href?: string;
  buttonLabel?: string;
}
const SectionHeader: NextComponentType<
  NextPageContext,
  {},
  SectionHeaderProps
> = ({ title, href, buttonLabel }) => (
  <div className="flex justify-between">
    <h2 className="text-lg font-medium text-zinc-200">{title}</h2>
    {href && (
      <Link
        className="whitespace-pre text-sm text-zinc-400 group flex items-center hover:text-zinc-200 transition-all duration-300"
        href={href}
      >
        {buttonLabel ?? "All"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 ml-1 group-hover:text-yellow-400"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    )}
  </div>
);
export default SectionHeader;

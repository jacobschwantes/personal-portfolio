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
  <div className="flex justify-between items-center py-6">
    <h2 className="tracking-[.25em] text-zinc-700 uppercase sm:text-base text-sm">{title}</h2>
    {href && (
      <Link
        className="tracking-[.1em] text-zinc-700  uppercase group transition-all duration-300 flex items-center sm:text-base text-sm"
        href={href}
      >
        {buttonLabel ?? "All"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 ml-1 group-hover:translate-x-1 transition-all duration-300 ease-out"
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

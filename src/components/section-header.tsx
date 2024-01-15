import { NextPageContext, NextComponentType } from "next";
import CustomLink from "./ui/link";
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
    <h2 className=" dark:text-zinc-200 text-zinc-900 font-medium text-lg">{title}</h2>
    {href && (
     <CustomLink href={href} label={buttonLabel ?? "View more"} />
    )}
  </div>
);
export default SectionHeader;




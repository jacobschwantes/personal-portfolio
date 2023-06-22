import { NextPageContext, NextComponentType } from "next";
import CustomLink from "./CustomLink";
interface CTAProps {}
const CTA: NextComponentType<NextPageContext, {}, CTAProps> = ({}) => (
  <section className="max-w-4xl md:px-32 px-6 space-y-10 flex flex-col items-start pb-24">
    <h3 className="md:text-4xl text-3xl text-white font-medium leading-tight">
      Let&apos;s connect &mdash; Always happy to chat new ideas and opportunities.
    </h3>
    <CustomLink href="/contact">Contact</CustomLink>
  </section>
);
export default CTA;

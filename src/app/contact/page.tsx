import type { NextPage } from "next";
import ContactForm from "@/app/components/ContactForm";
interface PageProps {}
const Home: NextPage<PageProps> = ({}) => {
  return (
    <main className="flex min-h-screen flex-col justify-between md:py-24 py-14">
      <div className="w-full mx-auto px-6 py-18 space-y-16">
        <section className="text-left max-w-5xl md:px-24 space-y-3">
          <h1 className="text-zinc-300 font-light">
            Designing solutions that exceed your expectations, together.
          </h1>
          <p className="md:text-4xl text-3xl text-white font-medium leading-tight">
            Let&apos;s collaborate! Get in touch with me to discuss your next
            project.
          </p>
        </section>
        <section className=" md:px-24 max-w-4xl">
         <ContactForm/>
        </section>
      </div>
    </main>
  );
};
export default Home;

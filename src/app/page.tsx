import CustomLink from "./components/CustomLink";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import { getProjects } from "./lib/mdxUtils";
import { convertProjectFiles } from "./lib/imageUtils";
export const metadata = {
  title: "Jacob Schwantes | Full-Stack Developer",
  description:
    "Transforming complex problems into simple, elegant, and engaging digital experiences",
  openGraph: {
    images: ["/og?id=root"],
    title: "Jacob Schwantes | Full-Stack Developer",
    description:
      "Transforming complex problems into simple, elegant, and engaging digital experiences.",
    url: `https://jsch.me/`,
    siteName: "jsch.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "app",
    title: "Jacob Schwantes | Full-Stack Developer",
    description: "Transforming complex problems into simple, elegant, and engaging digital experiences.",
    images: {
      url: "/og?id=root",
      alt: "Jacob Schwantes | Full-Stack Developer",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://jsch.me/",
        ipad: "https://jsch.me/",
      },
    },
  },
};
export default async function Home() {
  const projectFiles = getProjects();
  const withBlurData = await convertProjectFiles(projectFiles);
  return (
    <main className="flex min-h-screen flex-col justify-between w-full mx-auto md:py-24 py-14 spacey-y-10 ">
      <section className="md:px-32 px-8 md:py-12 py-6">
        <div className="text-left max-w-3xl space-y-10 flex flex-col items-start">
          <div className="space-y-4">
            <h1 className="text-zinc-300 font-light">
              Jacob Schwantes &mdash; Full-Stack Developer
            </h1>
            <p className="md:text-5xl text-3xl text-white font-medium leading-tight">
              Transforming complex problems into simple, elegant, and engaging
              digital experiences.
            </p>
          </div>
          <CustomLink href="/projects">Explore</CustomLink>
          <Socials />
        </div>
      </section>
      <section className="md:px-6 py-10">
        <Projects limit={2} files={withBlurData} />
      </section>
    </main>
  );
}

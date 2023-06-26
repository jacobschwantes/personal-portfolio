import Projects from "../components/Projects";
import { getProjects } from "../lib/mdxUtils";
import { convertProjectFiles } from "../lib/imageUtils";
export const metadata = {
  title: "Jacob Schwantes | Projects",
  description: "Take a deep dive into some of my favorite projects.",
  openGraph: {
    images: ["/og"],
    title: "Jacob Schwantes | Projects",
    description: "Take a deep dive into some of my favorite projects.",
    url: `https://jsch.me/projects`,
    siteName: "jsch.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Schwantes — Full-Stack Developer',
    description: 'Take a deep dive into some of my favorite projects.',
    creator: '@jacobschwantes',
    images: ['/og'],
  },
};
export default async function Home() {
  const projectFiles = getProjects();
  const withBlurData = await convertProjectFiles(projectFiles);
  return (
    <main className="flex min-h-screen flex-col justify-between md:py-24 py-14">
      <div className="w-full mx-auto md:px-6 md:py-18  space-y-24">
        <section className="text-left max-w-4xl md:px-24 px-6 space-y-1">
          <h1 className="text-zinc-300 font-light">Projects</h1>
          <p className="md:text-5xl text-3xl text-white font-medium leading-tight">
            Take a deep dive into some of my favorite projects
          </p>
        </section>
        <section className=" md:px-4 px-2">
          <Projects files={withBlurData} wide />
        </section>
      </div>
    </main>
  );
}

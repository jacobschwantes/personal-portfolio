import { Project } from "@/types/projectTypes";
import Projects from "../components/Projects";
import { getProjects } from "../lib/mdxUtils";
import { getPlaiceholder } from "plaiceholder";
const getBase64Data = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);

  return base64;
};
const convertProjectFiles = async (files: Project[]) => {

  const copy = [...files];
  for (const file of copy) {
    const blurData = await getBase64Data(file.meta.img);
    file.blurData = blurData;
  }
  
  return files;
}
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

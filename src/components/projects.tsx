import { NextPageContext, NextComponentType } from "next";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/mdx-utils";

interface ProjectsProps {
  wide?: boolean;
  limit?: number;
  random?: boolean;
  currentProject?: string;
}
const Projects: NextComponentType<NextPageContext, {}, ProjectsProps> = async ({
  wide,
  limit,
  random,
  currentProject,
}) => {
  const projects = await getAllProjects()
    .then((projects) => {
      if (random) {
        return projects.sort(() => Math.random() - 0.5);
      }
      return projects;
    })
    .then((projects) => {
      if (currentProject) {
        return projects.filter((project) => project.slug !== currentProject);
      }
      return projects;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });

  return (
    <div
      className={clsx(
        wide ? "grid-cols-1" : "md:grid-cols-2 grid-cols-1 ",
        "grid sm:gap-4 gap-8"
      )}
    >
      {projects.slice(0, limit ?? projects.length).map((project, i) => (
        <Link key={project.slug} replace href={`/projects/${project.slug}`}>
          <div className=" bg-zinc-50 dark:bg-zinc-900 rounded-2xl group flex flex-col overflow-hidden w-full aspect-[4/3] relative border border-zinc-100 dark:border-zinc-800">
            <div className=" relative flex-1 group-hover:scale-[1.03] ease-out transition-all duration-500 mb-12 ">
              <Image
                priority
                fill
                alt={`preview image of ${project.meta.name} project`}
                className="object-cover h-full w-full  group-hover:saturate-125 group-hover:brightness-100 brightness-[99%] transitional duration-300 ease-out"
                src={`/images/projects/${project.slug}/preview.png`}
              />
            </div>
            <div className="flex flex-col p-5 absolute bottom-0 w-full  ">
              <h3 className="relative z-10 text-zinc-800 dark:text-zinc-200">
                {project.meta.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 relative z-10">
                {project.meta.description}
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-800/30 inset-0 absolute blur-xl"></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Projects;

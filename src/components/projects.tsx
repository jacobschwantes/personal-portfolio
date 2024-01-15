import { NextPageContext, NextComponentType } from "next";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/mdx-utils";

interface ProjectsProps {
  wide?: boolean;
  limit?: number;
}
const Projects: NextComponentType<NextPageContext, {}, ProjectsProps> = async ({
  wide,
  limit,
}) => {
  const projects = await getAllProjects();
  return (
    <div
      className={clsx(
        wide ? "grid-cols-1" : "md:grid-cols-2 grid-cols-1 ",
        "grid sm:gap-4 gap-8"
      )}
    >
      {projects.slice(0, limit ?? projects.length).map((project, i) => (
        <Link key={project.slug} replace href={`/projects/${project.slug}`}>
          <div className=" bg-zinc-50 rounded-2xl group flex flex-col overflow-hidden w-full aspect-[4/3] relative border border-zinc-100">
            <div className=" relative flex-1 group-hover:scale-[1.03] ease-out transition-all duration-500 mb-12 ">
              <Image
                priority
                fill
                alt={`preview image of ${project.meta.name} project`}
                className="object-cover h-full w-full  group-hover:saturate-125 group-hover:brightness-100 brightness-[99%] transitional duration-300 ease-out"
                src={project.meta.images[0]}
              />
            </div>
            <div className="flex flex-col p-5 absolute bottom-0 w-full  ">
              <h3 className="relative z-10 text-zinc-800">
                {project.meta.name}
              </h3>
              <p className="text-sm text-zinc-600 relative z-10">
                {project.meta.description}
              </p>
              <div className="bg-zinc-100 inset-0 absolute blur"></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Projects;

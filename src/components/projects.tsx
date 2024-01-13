import { NextPageContext, NextComponentType } from "next";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

interface ProjectsProps {
  wide?: boolean;
  files: Project[];
  limit?: number;
}
const Projects: NextComponentType<NextPageContext, {}, ProjectsProps> = ({
  wide,
  files,
  limit,
}) => {
  return (
    <div
      className={clsx(
        wide ? "grid-cols-1" : "md:grid-cols-2 grid-cols-1",
        "grid gap-8"
      )}
    >
      {files.slice(0, limit ?? files.length).map((project, i) => (
        <Link key={project.slug} href={`projects/${project.slug}`}>
          <div className=" bg-zinc-100 rounded-[2rem] group flex flex-col overflow-hidden w-full aspect-square">
            <div className="overflow-hidden rounded-[2rem] relative flex-1 group-hover:scale-[1.03] ease-out transition-all duration-500  ">
              <Image
                priority
                fill
                alt={`preview image of ${project.meta.name} project`}
                className="object-cover h-full w-full  group-hover:saturate-125 group-hover:brightness-100 brightness-[99%] transitional duration-500 ease-out"
                src={project.meta.img}
              />
            </div>
            <div className="flex flex-col p-10 gap-3  ">
              <h3 className="font-medium text-3xl">{project.meta.name}</h3>
              <ul className="flex gap-2">
                {project.meta.tags.map((tag) => (
                  <li className="badge-light" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Projects;

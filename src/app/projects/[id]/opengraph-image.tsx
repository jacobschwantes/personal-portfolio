import { getProject } from "@/lib/mdx-utils";
import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { serialize } from "next-mdx-remote/serialize";
import { Project, ProjectMeta } from "@/lib/types";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const markdownFile = fs.promises.readFile(
    path.join(
      fileURLToPath(import.meta.url),
      `../../../../content/projects/${params.id}.mdx`
    )
  );
  const { frontmatter } = await serialize(await markdownFile, {
    parseFrontmatter: true,
  }) as { frontmatter: ProjectMeta };
  const interMedium = fs.promises.readFile(
    path.join(
      fileURLToPath(import.meta.url),
      "../../../../assets/fonts/Inter-Medium.ttf"
    )
  );
  const interRegular = fs.promises.readFile(
    path.join(
      fileURLToPath(import.meta.url),
      "../../../../assets/fonts/Inter-Regular.woff"
    )
  );

  return new ImageResponse(
    (
      <div tw="flex justify-between  w-full h-full items-center bg-zinc-50">
        <div tw="w-1/2 flex flex-col h-full gap-0 justify-center space-y-0 pl-12 ">
          <h2 tw="font-medium text-6xl text-zinc-900 flex flex-col">
            <span>{frontmatter.name}</span>
            <span tw="text-zinc-600 text-2xl font-normal leading-tighter  ">
              {frontmatter.description}
            </span>
          </h2>
        </div>

        <div tw="w-[110%] flex h-full absolute -right-[50%] -top-[50%] ">
          <img
            tw=" object-cover "
            src={`http://localhost:3000${frontmatter.images[0]}`}
          />
        </div>
        <div
          style={{ filter: "blur(50px)" }}
          tw="w-full h-[50%] absolute -bottom-[35%] bg-zinc-50  left-0 right-0"
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: await interMedium,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}

import { getPlaiceholder } from "plaiceholder";
import type { Project } from "@customTypes/projectTypes";
const getBase64Data = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);

  return base64;
};
export const convertProjectFiles = async (files: Project[]) => {
  for (const file of files) {
    const blurData = await getBase64Data(file.meta.img);
    file.blurData = blurData;
  }
  return files;
};

import { ImageResponse } from "next/og";

const regularFont = fetch(
  new URL("../../assets/fonts/Inter-Regular.woff", import.meta.url)
).then((res) => res.arrayBuffer());

const boldFont = fetch(
  new URL("../../assets/fonts/Inter-Bold.woff", import.meta.url)
).then((res) => res.arrayBuffer());
export const runtime = "edge";

const image = fetch(
  new URL("../../assets/images/abstract.jpg", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projectImageSrc = searchParams.get("preview");
  const description = searchParams.get("description");
  const name = searchParams.get("name");
  const template = searchParams.get("template");
  const product = searchParams.get("product");
  const tagline = searchParams.get("tagline");
  const imgData = await image;
  const [regularFontBuffer, boldFontBuffer] = await Promise.all([
    regularFont,
    boldFont,
  ]);

  if (template === "project")
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#00000",
            backgroundImage: "linear-gradient(315deg, #111624 0%, #000000 88%)",
          }}
          tw="flex h-full w-full items-center justify-between "
        >
          <div tw="flex flex-col h-full flex-1 items-start justify-between p-18">
            <div
              style={{ fontWeight: 700 }}
              tw="flex flex-col justify-center text-[70px] text-left text-white rounded-xl leading-[.9]"
            >
              {name}
              <p tw="font-normal my-6 text-zinc-300 text-2xl my-4">{product}</p>
            </div>
            <p tw="font-normal my-6 text-zinc-50 text-2xl">{description}</p>
          </div>
          <div tw="w-1/2 flex items-center h-full p-14">
            <img
              alt="preview of project"
              tw="w-full h-full rounded-[2rem]"
              //@ts-ignore
              src={projectImageSrc || imgData}
            />
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "Inter",
            data: regularFontBuffer,
            weight: 400,
          },
          {
            name: "Inter",
            data: boldFontBuffer,
            weight: 700,
          },
        ],
      }
    );
  return new ImageResponse(
    (
      <div tw="flex h-full w-full bg-black relative">
        <img
          alt="preview of project"
          tw="h-[630px] absolute -right-[6.75rem] "
          //@ts-ignore
          src={imgData}
        />
        <div tw="flex flex-col h-full items-start justify-between h-[630px] max-w-[700px] p-18">
          <p tw="font-normal text-zinc-200 text-4xl my-0">Jacob Schwantes</p>
          <h1
            style={{ fontWeight: 700 }}
            tw="flex justify-center text-[90px] text-white rounded-xl  leading-[.75] my-0 mb-5"
          >
            {tagline || "Full-Stack Developer"}
          </h1>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: regularFontBuffer,
          weight: 400,
        },
        {
          name: "Inter",
          data: boldFontBuffer,
          weight: 700,
        },
      ],
    }
  );
}

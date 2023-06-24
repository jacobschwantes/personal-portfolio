import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get("preview");
  const description = searchParams.get("description");
  const name = searchParams.get("name");
  const regularFont = await fetch(
    new URL("../../assets/fonts/Inter-Regular.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const boldFont = await fetch(
    new URL("../../assets/fonts/Inter-Bold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());


  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#2d3436",
          backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 88%)",
        }}
        tw="flex h-full w-full items-center justify-between "
      >
        <div tw="flex flex-col h-full flex-1 items-start justify-center p-10">
          <div tw="flex">
            <img
              alt="profile picture"
              tw="h-12 rounded-full border border-zinc-800 my-4"
              src="https://avatars.githubusercontent.com/u/74641690?v=4"
            />
          </div>

          <div
            style={{ fontWeight: 700 }}
            tw="flex flex-wrap justify-center text-5xl text-center text-white rounded-xl"
          >
            {name}
          </div>
          <p tw="font-normal my-4 text-zinc-400 text-xl">{description}</p>
        </div>
        <div tw="w-1/2 flex items-center h-full">
          <img
            alt="preview of project"
            tw="w-full h-full"
            src={src || "https://via.placeholder.com/150"}
          />
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: regularFont,
          weight: 400,
        },
        {
          name: "Inter",
          data: boldFont,
          weight: 700,
        },
      ],
    }
  );
}

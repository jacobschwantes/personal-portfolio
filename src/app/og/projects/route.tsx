import { ImageResponse } from "next/og";

export const runtime = "edge";



export async function GET(request: Request) {
  const basePath =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const description = searchParams.get("description");

  const interMedium = fetch(
    new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const interRegular = fetch(
    new URL("../../../assets/fonts/Inter-Regular.woff", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex justify-between  w-full h-full items-center bg-zinc-50">
        <div tw="w-1/2 flex flex-col h-full gap-0 justify-center space-y-0 pl-12 ">
          <h2 tw="font-medium text-6xl text-zinc-900 flex flex-col">
            <span>{id}</span>
            <span tw="text-zinc-600 text-2xl font-normal leading-tighter  ">
              {description}
            </span>
          </h2>
        </div>

        <div tw="w-[110%] flex h-full absolute -right-[50%] -top-[50%] ">
          <img tw=" object-cover " src={`${basePath}/${id?.toLowerCase()}.png`} />
        </div>
        <div
          style={{ filter: "blur(50px)" }}
          tw="w-full h-[50%] absolute -bottom-[35%] bg-zinc-50  left-0 right-0"
        />
      </div>
    ),
    {
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
      width: 1200,
      height: 630,
    }
  );
}

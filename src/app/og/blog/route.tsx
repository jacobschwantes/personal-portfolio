import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "My blog title";

  const interMedium = fetch(
    new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const interRegular = fetch(
    new URL("../../../assets/fonts/Inter-Regular.woff", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #f4f4f5, #fafafa, #e4e4e7)",
        }}
        tw="h-full w-full flex items-start justify-start"
      >
        <div tw="flex items-start justify-start h-full">
          <div tw="flex flex-col justify-between w-full h-full p-20">
            <h2 tw="text-[30px] text-white font-bold text-left text-zinc-800">
              Jacob Schwantes
            </h2>

            <h1 tw="text-[60px] text-white font-bold text-left text-zinc-900">
              {title}
            </h1>
          </div>
        </div>
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

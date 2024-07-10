import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	openGraph: {
		siteName: "Jacob Schwantes",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={clsx(
					"max-w-3xl mx-auto dark:bg-zinc-900 px-4 md:px-0",
					inter.className
				)}
			>
				<Header />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}

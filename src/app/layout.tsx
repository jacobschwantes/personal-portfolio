import Footer from "../components/footer";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("max-w-3xl mx-auto dark:bg-neutral-900" ,inter.className)}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

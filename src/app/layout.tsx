import Header from "@/components/page-header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(" flex flex-col md:gap-[--gap] gap-[--gap-sm]",inter.className)}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
   </html>
  );
}

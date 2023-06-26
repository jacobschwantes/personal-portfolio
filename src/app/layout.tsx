import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://jsch.me/'),
  themeColor: "#2563EB",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <CTA />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

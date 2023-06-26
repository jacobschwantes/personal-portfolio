import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jacob Schwantes",
  description: "The personal portfolio of Jacob Schwantes",
  openGraph: {
    images: ["/og?id=root"],
    title: "Jacob Schwantes | Full-Stack Developer",
    description:
      "Transforming complex problems into simple, elegant, and engaging digital experiences.",
    url: `https://jsch.me/`,
    siteName: "jsch.me",
    locale: "en_US",
    type: "website",
  },
};

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

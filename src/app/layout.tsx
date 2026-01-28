import type { Metadata } from "next";
import { Open_Sans, Pacifico } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollHeaderState } from "@/components/ScrollHeaderState";
import { site } from "@/content/site";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  icons: {
    icon: [{ url: "/images/primarylogocopy.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${pacifico.variable}`}>
      <body>
        <ScrollHeaderState />
        <div className="page">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Open_Sans, Pacifico } from "next/font/google";
import Script from "next/script";

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
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${pacifico.variable}`}>
      <head>
        <Script
          id="mcjs"
          strategy="beforeInteractive"
          src="https://chimpstatic.com/mcjs-connected/js/users/b14a1e11083ebe95a91d23b07/2bcef125e88b01332dbb1dc15.js"
        />
      </head>
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

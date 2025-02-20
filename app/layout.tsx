// Libs
import type { Metadata } from "next";
import * as React from "react";

// UI Libs
import ResponsiveNavbar from "@/components/section/navbar";
import Menu from "@/components/ui/menu";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
// Provider
import { MenuProvider } from "@/components/ui/menuprovider";

// Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Others
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Footer from "@/components/section/footer";
import Dock from "@/components/ui/dock";
import FadeInUnblur from "@/components/ui/fadeinunblur";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  applicationName: "Ziel",
  title: {
    default: "Creative Developer and Designer - Ziel",
    template: "%s - Ziel"
  },
  keywords: [
    "web developer",
    "ui ux designer",
    "ui/ux designer",
    "front end web developer",
    "front end developer",
    "dailyziel",
    "ziel",
    "ziel developer",
    "web designer",
    "jasa web designer",
    "next js developer",
    "jasa web developer",
    "designer",
  ],
  verification: {
    google: "0fZVJ4YEDNuyoWR6phur0AoiA02wRVo1vYUmuvvLC-o",
  },
  icons: {
    icon: `/favicon.ico`,
  },
  description:
    "I craft visual and design functional website. Transform your idea into an extraordinarily beautiful website.",
  openGraph: {
    title: "Ziel - Designer & Developer",
    url: baseUrl,
    siteName: "Ziel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/thumbnail.png`,
        alt: "Ziel",
        width: 1200,
        height: 1100,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziel - Designer & Developer",
    images: [`https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/thumbnail.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body>
        <MenuProvider>
          <div className="max-w-screen-2xl mx-auto" >
            <NextTopLoader
              color="#9810fa"
              initialPosition={0.08}
              easing="ease"
              speed={300}
              showSpinner={false}
              height={2}
              shadow="0 0 20px #9810fa, 0 0 10px #9810fa"
              zIndex={100}
            />
            <ResponsiveNavbar />
            <Dock />
            <FadeInUnblur>
              <ScrollProgress className="top-0" />
              {children}
              <Footer />
            </FadeInUnblur>
            <SpeedInsights />
            <Analytics />
          </div>
          <Menu></Menu>
        </MenuProvider>
        <Toaster></Toaster>
      </body>
    </html>
  );
}

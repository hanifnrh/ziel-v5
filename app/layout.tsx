// Libs
import type { Metadata } from "next";
import * as React from "react";

// UI Libs
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
// Provider

// Analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Others
import BottomNav from "@/components/section/bottom-nav";
import Footer from "@/components/section/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Script from "next/script";
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
    "ziel works",
    "ziel",
    "ziel developer",
    "web designer",
    "jasa web designer",
    "next js developer",
    "jasa web developer",
    "designer",
  ],
  verification: {
    google: "0HIn6kQmGyCDbFwld3wjxAgHh9IaPSP5dR5jweA_0sA",
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
        url: `/thumbnail.png`,
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
    images: [`/thumbnail.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-100 dark:bg-neutral-950">
      <body>
        <Script
          src="https://www.ziel.works/script.js"
          data-website-id="b440f280-3189-40df-b827-f98ffb664eac"
          strategy="afterInteractive" // loads after page is interactive
        />
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
            <ScrollProgress className="top-0" />
            {children}
            <BottomNav />
            <Footer />
            <SpeedInsights />
            <Analytics />
          </div>
          <Toaster></Toaster>
      </body>
    </html>
  );
}

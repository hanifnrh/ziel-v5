"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var React = require("react");
// UI Libs
var navbar_1 = require("@/components/section/navbar");
var menu_1 = require("@/components/ui/menu");
var toaster_1 = require("@/components/ui/toaster");
var nextjs_toploader_1 = require("nextjs-toploader");
// Provider
var menuprovider_1 = require("@/components/ui/menuprovider");
// Analytics
var react_1 = require("@vercel/analytics/react");
var next_1 = require("@vercel/speed-insights/next");
// Others
var footer_1 = require("@/components/section/footer");
var dock_1 = require("@/components/ui/dock");
var fadeinunblur_1 = require("@/components/ui/fadeinunblur");
var scroll_progress_1 = require("@/components/ui/scroll-progress");
var script_1 = require("next/script");
require("./globals.css");
var sitemap_1 = require("./sitemap");
exports.metadata = {
    metadataBase: sitemap_1.baseUrl ? new URL(sitemap_1.baseUrl) : undefined,
    applicationName: "Ziel",
    title: {
        "default": "Creative Developer and Designer - Ziel",
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
        google: "0HIn6kQmGyCDbFwld3wjxAgHh9IaPSP5dR5jweA_0sA"
    },
    icons: {
        icon: "/favicon.ico"
    },
    description: "I craft visual and design functional website. Transform your idea into an extraordinarily beautiful website.",
    openGraph: {
        title: "Ziel - Designer & Developer",
        url: sitemap_1.baseUrl,
        siteName: "Ziel",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/thumbnail.png",
                alt: "Ziel",
                width: 1200,
                height: 1100,
                type: "image/png"
            },
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Ziel - Designer & Developer",
        images: ["/thumbnail.png"]
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "bg-neutral-100 dark:bg-neutral-950" },
        React.createElement("body", null,
            React.createElement(script_1["default"], { src: "https://cloud.umami.is/script.js", "data-website-id": "b440f280-3189-40df-b827-f98ffb664eac", strategy: "afterInteractive" // loads after page is interactive
             }),
            React.createElement(menuprovider_1.MenuProvider, null,
                React.createElement("div", { className: "max-w-screen-2xl mx-auto" },
                    React.createElement(nextjs_toploader_1["default"], { color: "#9810fa", initialPosition: 0.08, easing: "ease", speed: 300, showSpinner: false, height: 2, shadow: "0 0 20px #9810fa, 0 0 10px #9810fa", zIndex: 100 }),
                    React.createElement(navbar_1["default"], null),
                    React.createElement(dock_1["default"], null),
                    React.createElement(scroll_progress_1.ScrollProgress, { className: "top-0" }),
                    React.createElement(fadeinunblur_1["default"], null,
                        children,
                        React.createElement(footer_1["default"], null)),
                    React.createElement(next_1.SpeedInsights, null),
                    React.createElement(react_1.Analytics, null)),
                React.createElement(menu_1["default"], null)),
            React.createElement(toaster_1.Toaster, null))));
}
exports["default"] = RootLayout;

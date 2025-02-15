"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var React = require("react");
// UI Libs
var menu_1 = require("@/components/ui/menu");
var navbar_1 = require("@/components/ui/navbar");
var toaster_1 = require("@/components/ui/toaster");
var nextjs_toploader_1 = require("nextjs-toploader");
// Provider
var menuprovider_1 = require("@/components/ui/menuprovider");
// Analytics
var react_1 = require("@vercel/analytics/react");
var next_1 = require("@vercel/speed-insights/next");
// Others
var scroll_progress_1 = require("@/components/magicui/scroll-progress");
var dock_1 = require("@/components/ui/dock");
var stacked_circular_footer_1 = require("@/components/ui/stacked-circular-footer");
require("./globals.css");
var sitemap_1 = require("./sitemap");
exports.metadata = {
    metadataBase: sitemap_1.baseUrl ? new URL(sitemap_1.baseUrl) : undefined,
    applicationName: "Msafdev",
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
        "ziel",
        "ziel developer",
        "web designer",
        "jasa web designer",
        "next js developer",
        "jasa web developer",
        "designer",
    ],
    verification: {
        google: "0fZVJ4YEDNuyoWR6phur0AoiA02wRVo1vYUmuvvLC-o"
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
                url: sitemap_1.baseUrl + "/og",
                alt: "Ziel",
                type: "image/png"
            },
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Ziel - Designer & Developer",
        images: [sitemap_1.baseUrl + "/og"]
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "bg-neutral-950" },
        React.createElement("body", null,
            React.createElement(menuprovider_1.MenuProvider, null,
                React.createElement("div", { className: "max-w-screen-2xl mx-auto" },
                    React.createElement(nextjs_toploader_1["default"], { color: "#9810fa", initialPosition: 0.08, easing: "ease", speed: 300, showSpinner: false, height: 2, shadow: "0 0 20px #9810fa, 0 0 10px #9810fa", zIndex: 100 }),
                    React.createElement(navbar_1["default"], null),
                    React.createElement(dock_1["default"], null),
                    React.createElement(scroll_progress_1.ScrollProgress, { className: "top-0" }),
                    children,
                    React.createElement(next_1.SpeedInsights, null),
                    React.createElement(react_1.Analytics, null),
                    React.createElement(stacked_circular_footer_1.StackedCircularFooter, null)),
                React.createElement(menu_1["default"], null)),
            React.createElement(toaster_1.Toaster, null))));
}
exports["default"] = RootLayout;

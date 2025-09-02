"use client";
"use strict";
exports.__esModule = true;
var dot_pattern_1 = require("@/components/ui/dot-pattern");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var icon_cloud_1 = require("../ui/icon-cloud");
var images = [
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
    "/svg/figma.svg",
    "/svg/laravel.svg",
    "/svg/nextjs.svg",
    "/svg/react.svg",
    "/svg/tailwind.svg",
    "/svg/vercel.svg",
];
function Description() {
    return (React.createElement("div", { className: "relative flex flex-col px-8 md:px-20 2xl:px-52 pb-10" },
        React.createElement(dot_pattern_1.DotPattern, { className: utils_1.cn("[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] opacity-10") }),
        React.createElement("div", { className: "py-5" },
            React.createElement("h2", { className: "flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit" },
                React.createElement(lucide_react_1.Atom, { className: "mr-2" }),
                "Description")),
        React.createElement("div", { className: "flex flex-col sm:flex-row gap-8 items-center" },
            React.createElement("div", { className: "order-2 sm:order-1 relative flex max-w-lg items-center justify-center overflow-hidden bg-background" },
                React.createElement(icon_cloud_1.IconCloud, { images: images })),
            React.createElement("div", { className: "order-1 sm:order-2 w-full flex flex-col gap-4" },
                React.createElement("h3", { className: "flex text-4xl sm:text-3xl font-normal lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-200 dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "Functionality & Aesthetics"),
                React.createElement("p", { className: "text-neutral-500 body-light text-sm lg:text-lg" }, "Started out in UI design with Figma, UX research, and prototyping visual design. Next up I escalate skills in frontend development with React Js and Next.js for creating dynamic and responsive web applications. Not only limited in frontend, I also have experience in building backend and full stack application using Django, Laravel, GraphQL, MySQL, and Supabase.")))));
}
exports["default"] = Description;

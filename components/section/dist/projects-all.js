"use client";
"use strict";
exports.__esModule = true;
var dot_pattern_1 = require("@/components/magicui/dot-pattern");
var animated_shiny_text_1 = require("@/components/ui/animated-shiny-text");
var utils_1 = require("@/lib/utils");
var react_1 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var spotlight_button_1 = require("../ui/spotlight-button");
function ProjectsAll() {
    return (React.createElement("div", null,
        React.createElement("div", { className: "px-8 md:px-20 2xl:px-52 py-5" },
            React.createElement("h2", { className: "flex bg-purple-600/20 text-purple-600 px-4 py-2 rounded-full w-fit" },
                React.createElement(lucide_react_1.Pickaxe, { className: "mr-2" }),
                "Projects")),
        React.createElement("div", { className: "relative px-8 md:px-20 2xl:px-52 pb-10 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between" },
            React.createElement("div", { className: "sm:w-2/3 xl:w-1/2 flex flex-col gap-4" },
                React.createElement(dot_pattern_1.DotPattern, { className: utils_1.cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-40") }),
                React.createElement("h3", { className: "flex text-4xl sm:text-3xl lg:text-5xl body tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "Design-Driven Development"),
                React.createElement("p", { className: "text-zinc-500 body-light text-md lg:text-lg" }, "These projects highlight my journey of merging aesthetics with functionality. Started as a visual enthusiast, I went through many challenges to build functional yet visually pleasing project.")),
            React.createElement(react_1.Link, { href: "/under-construction", rel: "canonical", className: "sm:w-1/3 xl:w-1/2 text-zinc-200 flex justify-start items-start sm:justify-end" },
                React.createElement(spotlight_button_1.SpotlightButton, null))),
        React.createElement("div", { className: "relative flex flex-col items-center px-8 md:px-20 2xl:px-52 pb-20 bg-background", id: "projects" },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-8 items-start" },
                React.createElement(react_1.Link, { href: "/under-construction", rel: "canonical", target: "_blank", className: "group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200" },
                    React.createElement("div", { className: "overflow-hidden rounded-xl" },
                        React.createElement("div", { className: utils_1.cn("absolute top-3 left-3 z-20 inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200") },
                            React.createElement(animated_shiny_text_1.AnimatedShinyText, { className: "body-light px-4 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\uD83C\uDFC6 3rd Place TECHCOMFEST UI/UX 2024")),
                        React.createElement(image_1["default"], { src: "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/academiku.png", width: 1000, height: 1000, className: "w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all", alt: "Academiku Prototype" })),
                    React.createElement("div", { className: "flex flex-wrap gap-2 text-xs text-zinc-200 items-center" },
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "UI/UX Prototype"),
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "Educational"),
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "Interactive Learning")),
                    React.createElement("h3", { className: "text-xl sm:text-2xl" }, "Academiku: Where Learning Meets Simplicity"),
                    React.createElement("p", { className: "body-light text-sm text-zinc-500" }, "Academiku is an innovative educational app designed to enhance learning experiences with a host of exciting features. It bridges the gap between educators and students, fostering seamless interaction and active participation."),
                    React.createElement("div", { className: "flex justify-between w-full text-purple-600 mt-2 sm:mt-4 " },
                        React.createElement("p", { className: "link-hover-animation group-hover:link-hovered-animation w-fit text-sm" },
                            "View details",
                            React.createElement(lucide_react_1.ArrowRight, { className: 'ml-1 inline-block transition-all duration-300 group-hover:ml-2' })))),
                React.createElement(react_1.Link, { href: "/under-construction", rel: "canonical", target: "_blank", className: "group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200" },
                    React.createElement("div", { className: "overflow-hidden rounded-xl" },
                        React.createElement("div", { className: utils_1.cn("absolute top-3 left-3 z-20 inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200") },
                            React.createElement(animated_shiny_text_1.AnimatedShinyText, { className: "body-light px-4 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\uD83C\uDFC6 3rd Place ANFORCOM UI/UX 2023")),
                        React.createElement(image_1["default"], { src: "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/jiwakita.png", width: 1000, height: 1000, className: "w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all", alt: "Jiwakita Prototype" })),
                    React.createElement("div", { className: "flex flex-wrap gap-2 text-xs text-zinc-200 items-center" },
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "UI/UX Prototype"),
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "Healthcare"),
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "Emotional Resilience")),
                    React.createElement("h3", { className: "text-xl sm:text-2xl" }, "Jiwakita: Fulfill Your Mental Needs"),
                    React.createElement("p", { className: "body-light text-sm text-zinc-500" }, "Jiwakita is a mental health app equipped with all-encompassing features tailored to meet users' mental wellness needs. With its versatile functionalities and holistic approach, Jiwakita offers accessible solutions for everyone to enhance their mental well-being."),
                    React.createElement("div", { className: "flex justify-between w-full text-purple-600 mt-2 sm:mt-4 " },
                        React.createElement("p", { className: "link-hover-animation group-hover:link-hovered-animation w-fit text-sm" },
                            "View details",
                            React.createElement(lucide_react_1.ArrowRight, { className: 'ml-1 inline-block transition-all duration-300 group-hover:ml-2' })))),
                React.createElement(react_1.Link, { href: "/under-construction", rel: "canonical", target: "_blank", className: "group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200" },
                    React.createElement("div", { className: "overflow-hidden rounded-xl" },
                        React.createElement("div", { className: utils_1.cn("absolute top-3 left-3 z-20 inline-flex items-center group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200") },
                            React.createElement(animated_shiny_text_1.AnimatedShinyText, { className: "body-light px-4 py-1 text-xs transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" }, "\u2699\uFE0F Course Final Project")),
                        React.createElement(image_1["default"], { src: "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/clipvision.png", width: 1000, height: 1000, className: "w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all", alt: "Clipvision" })),
                    React.createElement("div", { className: "flex gap-2 text-xs text-zinc-200 items-center" },
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "Web Project"),
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "RapidAPI"),
                        React.createElement("p", { className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, "Youtube Clone")),
                    React.createElement("h3", { className: "text-xl sm:text-2xl" }, "Clipvision: Easy Video Access"),
                    React.createElement("p", { className: "body-light text-sm text-zinc-500" }, "Upgrading my final task for my Mobile Programming Course\u2014PWA in my university, I utilize a few tools and libraries to develop easier access to youtube videos using RapidAPI."),
                    React.createElement("div", { className: "flex justify-between w-full text-purple-600 mt-2 sm:mt-4 " },
                        React.createElement("p", { className: "link-hover-animation group-hover:link-hovered-animation w-fit text-sm" },
                            "View details",
                            React.createElement(lucide_react_1.ArrowRight, { className: 'ml-1 inline-block transition-all duration-300 group-hover:ml-2' }))))))));
}
exports["default"] = ProjectsAll;

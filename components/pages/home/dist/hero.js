"use client";
"use strict";
exports.__esModule = true;
var gradient_button_1 = require("@/components/ui/gradient-button");
var react_1 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var react_2 = require("react");
var menuprovider_1 = require("../../ui/menuprovider");
function Hero() {
    var openMenu = menuprovider_1.useMenu().openMenu;
    var videoRef = react_2.useRef(null);
    return (React.createElement("div", null,
        React.createElement("section", { className: "py-20 lg:py-28 z-10 md:mt-8" },
            React.createElement("div", { className: "h-fit text-neutral-600 gap-x-6 grid grid-cols-1 sm:grid-cols-6 items-center justify-between gap-4 sm:gap-16 px-4 md:px-20 xl:px-28" },
                React.createElement("div", { className: "w-full flex flex-col items-center sm:items-start justify-center gap-4 md:px-0 sm:col-span-4 order-2 sm:order-1" },
                    React.createElement("h1", { className: "hidden sm:flex text-sm text-violet-500 dark:text-neutral-400 group sm:mr-auto px-5 py-2 bg-violet-100 dark:bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent dark:border-[2px] dark:border-white/5 rounded-3xl w-fit items-center" },
                        "Creative Designer & Developer",
                        React.createElement(lucide_react_1.Lightbulb, { className: "inline w-4 h-4 ml-2  duration-300" })),
                    React.createElement("h2", { className: "body text-4xl sm:text-3xl text-center sm:text-left font-normal tracking-tighter lg:text-5xl bg-gradient-to-b from-violet-700 via-violet-00 to-violet-500/70 bg-clip-text text-transparent" }, "Engineer by trade, creative by nature."),
                    React.createElement("p", { className: "body-light text-neutral-700 dark:text-neutral-500 text-center sm:text-justify text-md lg:text-lg" }, "Digital should feel fun and engaging. I craft immersive experiences that blend creativity with technology, ensuring functionality meets aesthetics."),
                    React.createElement("div", { className: "flex gap-2" },
                        React.createElement(gradient_button_1.GradientButton, { onClick: openMenu },
                            " ",
                            React.createElement(lucide_react_1.Sparkles, { className: "mr-2" }),
                            "Get in Touch"),
                        React.createElement(react_1.Link, { href: "https://github.com/hanifnrh", rel: "canonical", target: "_blank" },
                            React.createElement(gradient_button_1.GradientButton, { variant: "variant" },
                                " ",
                                React.createElement(lucide_react_1.Github, { className: "mr-2" }),
                                "Github")))),
                React.createElement("div", { className: "w-full h-full flex flex-col gap-4 sm:gap-8 items-center justify-center sm:justify-end sm:col-span-2 order-1 sm:order-2" },
                    React.createElement("h1", { className: "text-sm text-violet-500 dark:text-neutral-400 group sm:mr-auto px-5 py-2 bg-violet-100 dark:bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent dark:border-[2px] dark:border-white/5 rounded-3xl w-fit flex sm:hidden items-center" },
                        "Creative Designer & Developer",
                        React.createElement(lucide_react_1.Lightbulb, { className: "inline w-4 h-4 ml-2  duration-300" })),
                    React.createElement("video", { ref: videoRef, className: "w-full h-auto object-cover rounded-3xl aspect-video sm:aspect-square", autoPlay: true, loop: true, muted: true, playsInline: true, preload: "auto" },
                        React.createElement("source", { src: "/videos/hero.mp4", type: "video/mp4" }),
                        "Your browser does not support the video tag."))))));
}
exports["default"] = Hero;

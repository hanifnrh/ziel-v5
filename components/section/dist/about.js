"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var flickering_grid_1 = require("../magicui/flickering-grid");
function AboutSection() {
    return (React.createElement("div", null,
        React.createElement(image_1["default"], { className: "absolute top-0 z-0 -translate-y-1/2", src: "https://farmui.vercel.app/bg-back.png", width: 1000, height: 1000, alt: "back bg" }),
        React.createElement("section", { className: "pt-28 z-10" },
            React.createElement("div", { className: "h-fit text-gray-600 gap-x-12 flex w-full flex-col sm:flex-row items-center justify-between pb-20 gap-16 px-8 md:px-20 2xl:px-52" },
                React.createElement("div", { className: "flex-none space-y-5 w-full sm:w-7/12 md:px-0" },
                    React.createElement("h2", { className: "body text-4xl sm:text-3xl lg:text-5xl font-normal tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "I'm Ziel. UI Designer & Full Stack Developer."),
                    React.createElement("p", { className: "body-light text-zinc-500 text-sm lg:text-lg" }, "I'm Nurrahmat Hanif, I go by Ziel. A passionate UI/UX designer and full-stack web developer dedicated to crafting exceptional digital experiences. With a love for design and a knack for building visually stunning and functional creations. Based in Jakarta & Semarang, Indonesia."),
                    React.createElement("div", { className: "flex gap-2 lg:gap-4 p-2 lg:p-4 border-2 justify-around sm:justify-center border-dashed border-zinc-200/20 rounded-xl w-full sm:w-fit" },
                        React.createElement(react_1.Link, { href: "https://drive.google.com/file/d/1YVITGrnvwSLOR7WKBRs4cAaRevdYVNvf/view?usp=sharing", rel: "canonical", target: "_blank", className: "scale-100 sm:scale-75 lg:scale-100", "aria-label": "Resume" },
                            React.createElement("div", { className: "bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center" },
                                React.createElement(lucide_react_1.FileUser, null))),
                        React.createElement(react_1.Link, { href: "https://github.com/hanifnrh", rel: "canonical", target: "_blank", className: "scale-100 sm:scale-75 lg:scale-100" },
                            React.createElement("div", { className: " bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center" },
                                React.createElement(lucide_react_1.Github, null))),
                        React.createElement(react_1.Link, { href: "https://www.instagram.com/ziel.dev/", rel: "canonical", target: "_blank", className: "scale-100 sm:scale-75 lg:scale-100", "aria-label": "Instagram" },
                            React.createElement("div", { className: " bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center" },
                                React.createElement(lucide_react_1.Instagram, null))),
                        React.createElement(react_1.Link, { href: "https://dribbble.com/dailyziel", rel: "canonical", target: "_blank", className: "scale-100 sm:scale-75 lg:scale-100", "aria-label": "Dribbble" },
                            React.createElement("div", { className: " bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center" },
                                React.createElement(lucide_react_1.Dribbble, null))),
                        React.createElement(react_1.Link, { href: "https://www.linkedin.com/in/nurrahmat-hanif-635055218 ", rel: "canonical", target: "_blank", className: "scale-100 sm:scale-75 lg:scale-100", "aria-label": "LinkedIn" },
                            React.createElement("div", { className: " bg-zinc-200/20 hover:bg-zinc-200/10 transition-all text-zinc-200 hover:text-zinc-200/80 p-3 rounded-lg flex items-center justify-center" },
                                React.createElement(lucide_react_1.Linkedin, null))))),
                React.createElement("div", { className: "relative h-full w-full overflow-hidden rounded-lg border bg-background p-6" },
                    React.createElement(flickering_grid_1.FlickeringGrid, { className: "absolute inset-0 z-0 size-full", squareSize: 4, gridGap: 6, color: "#6B7280", maxOpacity: 0.5, flickerChance: 0.1, height: 800, width: 800 }),
                    React.createElement("div", { className: "relative group" },
                        React.createElement(image_1["default"], { src: "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/about.jpg", height: 1000, width: 1000, className: "z-20 w-full aspect-square object-cover rounded-lg brightness-50 grayscale", alt: "thumbnail" }),
                        React.createElement("div", { className: "absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light rounded-lg" }),
                        React.createElement("div", { className: "absolute inset-0 bg-noise opacity-10 rounded-lg" })))))));
}
exports["default"] = AboutSection;

"use strict";
exports.__esModule = true;
var gradient_button_1 = require("@/components/ui/gradient-button");
var sphere_animation_1 = require("@/components/ui/sphere-animation");
var react_1 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var button_1 = require("../ui/button");
var menuprovider_1 = require("../ui/menuprovider");
function Hero() {
    var openMenu = menuprovider_1.useMenu().openMenu;
    return (React.createElement("div", null,
        React.createElement(image_1["default"], { className: "absolute top-0 z-0 -translate-y-1/2", src: "https://farmui.vercel.app/bg-back.png", width: 1000, height: 1000, alt: "Hero Background" }),
        React.createElement("section", { className: "pt-16 lg:py-28 z-10" },
            React.createElement("div", { className: "h-fit text-gray-600 gap-x-12 grid grid-cols-1 lg:grid-cols-2 items-start justify-between p-8 pb-0 sm:pb-20 gap-16 px-8 md:px-20 2xl:px-52" },
                React.createElement("div", { className: "flex-none space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl" },
                    React.createElement("h1", { className: "text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                        "Creative Designer & Developer",
                        React.createElement(lucide_react_1.Lightbulb, { className: "inline w-4 h-4 ml-2  duration-300" })),
                    React.createElement("h2", { className: "body text-4xl sm:text-3xl font-normal tracking-tighter lg:text-5xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "Hello, I'm Ziel. I can turn your ideas into seamless user experiences."),
                    React.createElement("p", { className: "body-light text-zinc-500 text-md lg:text-lg" }, "Through putting creativity into code and logic into design, I work to deliver the best experiences to users."),
                    React.createElement("div", { className: "flex gap-2" },
                        React.createElement(button_1.Button, { onClick: openMenu },
                            React.createElement(gradient_button_1.GradientButton, null,
                                " ",
                                React.createElement(lucide_react_1.Sparkles, { className: "mr-2" }),
                                "Get in Touch")),
                        React.createElement(react_1.Link, { href: "https://github.com/hanifnrh", rel: "canonical", target: "_blank" },
                            React.createElement(gradient_button_1.GradientButton, { variant: "variant" },
                                " ",
                                React.createElement(lucide_react_1.Github, { className: "mr-2" }),
                                "Github")))),
                React.createElement("div", { className: "relative z-10 h-full w-full" },
                    React.createElement("div", { className: "my-auto" },
                        React.createElement(sphere_animation_1["default"], null)))))));
}
exports["default"] = Hero;

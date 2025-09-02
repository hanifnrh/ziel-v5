"use strict";
exports.__esModule = true;
var gradient_button_1 = require("@/components/ui/gradient-button");
var react_1 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
function UnderConstruction() {
    return (React.createElement("main", null,
        React.createElement("section", { className: "h-screen flex items-center z-10" },
            React.createElement("div", { className: "w-full h-fit text-neutral-600 gap-x-12 flex items-center justify-center p-8 pb-0 sm:py-20 gap-16 px-8 md:px-20 2xl:px-52" },
                React.createElement("div", { className: "flex flex-col w-full justify-center items-center space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl" },
                    React.createElement("h1", { className: "text-4xl sm:text-3xl lg:text-5xl" }, "\uD83D\uDEA7"),
                    React.createElement("h2", { className: "body text-center text-4xl sm:text-3xl font-normal tracking-tighter lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-200 dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "Page Under Construction"),
                    React.createElement("p", { className: "body-light text-neutral-500 text-md lg:text-lg" }, "The page is currently on progress, sorry for the inconvenient."),
                    React.createElement("div", { className: "flex gap-2" },
                        React.createElement(react_1.Link, { href: "/", rel: "canonical" },
                            React.createElement(gradient_button_1.GradientButton, null,
                                " ",
                                React.createElement(lucide_react_1.House, { className: "mr-2" }),
                                "Go to Home"))))))));
}
exports["default"] = UnderConstruction;

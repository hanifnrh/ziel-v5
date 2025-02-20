"use client";
"use strict";
exports.__esModule = true;
var encoded_1 = require("@/components/ui/encoded");
var mono_1 = require("geist/font/mono");
var dynamic_1 = require("next/dynamic");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
// Dynamically import the Clock component with ssr: false
var Clock = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/ui/clock"); }); }, { ssr: false });
function ResponsiveNavbar() {
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var currentPath = navigation_1.usePathname();
    return (React.createElement("div", { className: mono_1.GeistMono.className + " fixed top-0 z-50 w-full bg-transparent backdrop-blur-lg max-w-screen-2xl" },
        React.createElement("nav", { className: "flex-wrap items-center justify-between py-8 sm:py-4 flex px-8 md:px-20 2xl:px-52" },
            React.createElement("div", { className: "left-nav hidden md:flex items-center space-x-4" },
                React.createElement(link_1["default"], { href: "/", rel: "canonical", className: "body-light hidden md:block" },
                    React.createElement(Clock, { locale: "en-CA" }))),
            React.createElement(link_1["default"], { href: "/", rel: "canonical", className: "absolute py-4 left-1/2 transform -translate-x-1/2 " + (currentPath === "/"
                    ? "flex items-center space-x-3 rtl:space-x-reverse p-0 sm:py-2 sm:px-3 md:bg-transparent md:p-0"
                    : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 ") },
                React.createElement(image_1["default"], { src: "/ziel-logo-z-black.png", className: "h-14 w-auto navbar-logo", alt: "Ziel Logo", width: 500, height: 500, priority: true })),
            React.createElement("div", { className: "w-full hidden md:block md:w-auto", id: "navbar-default" },
                React.createElement("div", { className: "items-center flex font-bold flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0" },
                    React.createElement(encoded_1["default"], null))))));
}
exports["default"] = ResponsiveNavbar;

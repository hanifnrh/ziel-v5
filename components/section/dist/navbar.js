"use client";
"use strict";
exports.__esModule = true;
var encoded_1 = require("@/components/ui/encoded");
var mono_1 = require("geist/font/mono");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
function ResponsiveNavbar() {
    var _a = react_1.useState(false), isScrolled = _a[0], setIsScrolled = _a[1];
    react_1.useEffect(function () {
        var handleScroll = function () {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        // Clean up
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (React.createElement("div", { className: mono_1.GeistMono.className + " fixed top-2 z-50 w-full items transition-all duration-300 max-w-screen-2xl px-8 md:px-20 xl:px-28" },
        React.createElement("nav", { className: "w-fit md:w-full flex-wrap items-center justify-center md:justify-between py-2 md:py-4 px-2 md:px-6 rounded-lg md:rounded-2xl flex mx-auto " + (isScrolled
                ? 'bg-neutral-100/50 backdrop-blur-xl'
                : 'bg-transparent backdrop-blur-none') },
            React.createElement(link_1["default"], { href: "/", rel: "canonical", className: "flex items-center space-x-3 rtl:space-x-reverse p-0 md:py-2 md:px-3 md:bg-transparent md:p-0" },
                React.createElement(image_1["default"], { src: "/logo/zielviolet.png", className: "h-7 md:h-10 w-auto navbar-logo", alt: "Ziel Logo", width: 500, height: 500, priority: true })),
            React.createElement("div", { className: "w-full hidden md:block md:w-auto", id: "navbar-default" },
                React.createElement("div", { className: "items-center flex font-bold flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0" },
                    React.createElement(encoded_1["default"], null))))));
}
exports["default"] = ResponsiveNavbar;

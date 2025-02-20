"use client";
"use strict";
exports.__esModule = true;
var mono_1 = require("geist/font/mono");
var link_1 = require("next/link");
var react_1 = require("react");
var EncodedText = function () {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!?@#$%^&*()_+-=<>{}[]|/\\";
    var intervalRefs = react_1.useRef({});
    var onHover = function (event) {
        var targetElement = event.target;
        var originalText = targetElement.dataset.value || "";
        var currentIteration = 0;
        if (intervalRefs.current[originalText])
            clearInterval(intervalRefs.current[originalText]);
        var newIntervalId = window.setInterval(function () {
            var newText = originalText
                .split("")
                .map(function (char, idx) {
                if (idx < currentIteration) {
                    return originalText[idx];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
                .join("");
            targetElement.innerText = newText;
            if (currentIteration >= originalText.length) {
                if (newIntervalId)
                    clearInterval(newIntervalId);
            }
            currentIteration += 1 / 3;
        }, 30);
        intervalRefs.current[originalText] = newIntervalId;
    };
    return (React.createElement("div", { className: mono_1.GeistMono.className + " flex flex-col md:flex-row gap-x-5 gap-y-3 items-center" },
        React.createElement(link_1["default"], { href: "/about", rel: "canonical" },
            React.createElement("p", { "data-value": "About", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-200 hover:text-zinc-400" }, "ABOUT")),
        React.createElement(link_1["default"], { href: "/projects", rel: "canonical" },
            React.createElement("p", { "data-value": "CV", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-200 hover:text-zinc-400" }, "PROJECTS")),
        React.createElement(link_1["default"], { href: "/guestbook", rel: "canonical" },
            React.createElement("p", { "data-value": "Guestbook", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-200 hover:text-zinc-400" }, "GUESTBOOK")),
        React.createElement(link_1["default"], { href: "/blog", rel: "canonical" },
            React.createElement("p", { "data-value": "Blog", onMouseOver: onHover, className: "cursor-pointer uppercase text-zinc-200 hover:text-zinc-400" }, "BLOG"))));
};
exports["default"] = EncodedText;

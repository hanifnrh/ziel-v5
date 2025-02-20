"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var ProjectCard = function (_a) {
    var title = _a.title, description = _a.description, slug = _a.slug, featuredImage = _a.featuredImage, tags = _a.tags;
    return (React.createElement(link_1["default"], { href: "/" + slug, className: "group body w-full flex flex-col gap-4 justify-center items-start text-zinc-200" },
        React.createElement("div", { className: "overflow-hidden rounded-xl" },
            React.createElement(image_1["default"], { src: featuredImage, width: 1000, height: 1000, className: "w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all", alt: title })),
        React.createElement("div", { className: "flex flex-wrap gap-2 text-xs text-zinc-200 items-center" }, tags.map(function (tag, index) { return (React.createElement("p", { key: index, className: "bg-zinc-800 px-3 py-2 body-light rounded-full" }, tag)); })),
        React.createElement("h3", { className: "text-xl sm:text-2xl" }, title),
        React.createElement("p", { className: "body-light text-sm text-zinc-500" }, description)));
};
exports["default"] = ProjectCard;

"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var NavLink = function () {
    var links = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/designs", label: "Designs" },
        { href: "/blog", label: "Blog" },
        { href: "/guestbook", label: "Guestbook" },
    ];
    return (React.createElement("div", { className: "body-light flex flex-col md:flex-row gap-x-5 gap-y-3 items-center" }, links.map(function (_a) {
        var href = _a.href, label = _a.label;
        return (React.createElement(link_1["default"], { key: href, href: href, rel: "canonical", className: "group" },
            React.createElement("p", { "data-value": label, className: "cursor-pointer text-neutral-700 dark:text-neutral-200 hover:text-violet-600 transition-all dark:hover:text-neutral-400 link-hover-animation group-hover:link-hovered-animation" }, label)));
    })));
};
exports["default"] = NavLink;

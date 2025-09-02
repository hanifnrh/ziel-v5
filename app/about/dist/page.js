"use client";
"use strict";
exports.__esModule = true;
var about_1 = require("@/components/pages/about/about");
var description_1 = require("@/components/pages/about/description");
var story_1 = require("@/components/pages/about/story");
var my_approach_1 = require("@/components/pages/home/my-approach");
var experience_1 = require("@/components/section/experience");
var head_1 = require("next/head");
function About() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "About Ziel - Creative Developer")),
        React.createElement("main", { className: "bg-neutral-950" },
            React.createElement(about_1["default"], null),
            React.createElement(description_1["default"], null),
            React.createElement(experience_1["default"], null),
            React.createElement(my_approach_1["default"], null),
            React.createElement(story_1["default"], null))));
}
exports["default"] = About;

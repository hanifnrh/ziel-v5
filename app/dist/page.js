"use client";
"use strict";
exports.__esModule = true;
var bento_1 = require("@/components/pages/home/bento/bento");
var blogpreview_1 = require("@/components/pages/home/blogpreview");
var contact_form_1 = require("@/components/pages/home/contact-form");
var hero_1 = require("@/components/pages/home/hero");
var my_approach_1 = require("@/components/pages/home/my-approach");
var projects_preview_1 = require("@/components/pages/home/projects-preview");
var menuprovider_1 = require("@/components/ui/menuprovider");
function Home() {
    var openMenu = menuprovider_1.useMenu().openMenu;
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: "" },
            React.createElement(hero_1["default"], null),
            React.createElement(bento_1["default"], null),
            React.createElement(my_approach_1["default"], null),
            React.createElement(projects_preview_1["default"], null),
            React.createElement(blogpreview_1["default"], null),
            React.createElement(contact_form_1["default"], null))));
}
exports["default"] = Home;

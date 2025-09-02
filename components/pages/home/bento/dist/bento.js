"use client";
"use strict";
exports.__esModule = true;
var location_1 = require("./components/location");
var projects_1 = require("./components/projects");
var spotify_1 = require("./components/spotify");
var tech_stack_1 = require("./components/tech-stack");
var typing_speed_1 = require("./components/typing-speed");
function Bento() {
    return (React.createElement("div", { className: "w-full grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-2 pb-20 px-8 md:px-20 2xl:px-52 text-neutral-200" },
        React.createElement("div", { className: "w-full gap-2 grid grid-cols-1" },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2" },
                React.createElement(tech_stack_1["default"], null),
                React.createElement(typing_speed_1["default"], null)),
            React.createElement("div", { className: "hidden sm:grid lg:hidden grid-cols-2 gap-2" },
                React.createElement(location_1["default"], null),
                React.createElement(typing_speed_1["default"], null)),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2" },
                React.createElement("div", { className: "sm:hidden lg:block" },
                    React.createElement(location_1["default"], null)),
                React.createElement("div", { className: "group" },
                    React.createElement(spotify_1["default"], null)))),
        React.createElement(projects_1["default"], null)));
}
exports["default"] = Bento;

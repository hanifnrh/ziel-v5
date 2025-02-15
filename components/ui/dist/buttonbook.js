"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var button_1 = require("./button");
function ButtonBook(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(button_1.Button, __assign({ className: utils_1.cn("group relative inline-block cursor-pointer rounded-xl bg-zinc-900 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900", className) }, props),
        React.createElement("span", { className: "absolute inset-0 overflow-hidden rounded-xl" },
            React.createElement("span", { className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" })),
        React.createElement("div", { className: "body-light relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10" },
            React.createElement("span", null, "Book my service"),
            React.createElement(lucide_react_1.Calendar, { className: "w-4 h-4" })),
        React.createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40" })));
}
exports["default"] = ButtonBook;

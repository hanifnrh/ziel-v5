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
var button_1 = require("@/components/ui/button");
var utils_1 = require("@/lib/utils");
function ButtonClose(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(button_1.Button, __assign({ className: utils_1.cn("min-w-40 relative group", "bg-red-950/50", "text-red-600", "border-zinc-600", "hover:bg-red-950", className) }, props),
        React.createElement("div", { className: utils_1.cn("w-full flex items-center justify-center gap-2", "transition-transform duration-200 group-hover:scale-105") },
            React.createElement("span", null, "Close"))));
}
exports["default"] = ButtonClose;

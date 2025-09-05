"use client";
"use strict";
exports.__esModule = true;
exports.MainMenusGradientCard = void 0;
var usemouse_1 = require("@/components/hooks/usemouse");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
exports.MainMenusGradientCard = function (_a) {
    var title = _a.title, description = _a.description, _b = _a.withArrow, withArrow = _b === void 0 ? false : _b, _c = _a.circleSize, circleSize = _c === void 0 ? 400 : _c, className = _a.className, children = _a.children;
    var _d = usemouse_1.useMouse(), mouse = _d[0], parentRef = _d[1];
    return (React.createElement("div", { className: "h-full group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-4 transition-transform hover:scale-[1.01] active:scale-90", ref: parentRef },
        withArrow && (React.createElement(lucide_react_1.ArrowUpRightIcon, { className: "absolute right-2 top-2 z-10 size-5 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-neutral-300 " })),
        React.createElement("div", { className: utils_1.cn("absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]", mouse.elementX === null || mouse.elementY === null
                ? "opacity-0"
                : "opacity-100"), style: {
                maskImage: "radial-gradient(" + circleSize / 2 + "px circle at center, white, transparent)",
                width: circleSize + "px",
                height: circleSize + "px",
                left: mouse.elementX + "px",
                top: mouse.elementY + "px",
                background: "linear-gradient(135deg, #9216AE, #7A69F9, #9A63F2, #8B3FF5)"
            } }),
        React.createElement("div", { className: "absolute inset-px rounded-[19px] bg-neutral-200 dark:bg-neutral-950/80" }),
        children && (React.createElement("div", { className: utils_1.cn("grid relative  border-neutral-950", className) }, children)),
        React.createElement("div", { className: "relative pb-2 pt-4" },
            React.createElement("h3", { className: "text-lg body text-neutral-800 dark:text-neutral-300" }, title),
            React.createElement("p", { className: "body-light mt-2 text-neutral-700 dark:text-neutral-400" }, description))));
};

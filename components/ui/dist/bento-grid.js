"use client";
"use strict";
exports.__esModule = true;
exports.BentoCard = void 0;
var clsx_1 = require("clsx");
var framer_motion_1 = require("framer-motion");
function BentoCard(_a) {
    var _b = _a.dark, dark = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? "" : _c, graphic = _a.graphic, _d = _a.fade, fade = _d === void 0 ? [] : _d;
    return (React.createElement(framer_motion_1.motion.div, { initial: "idle", whileHover: "active", variants: { idle: {}, active: {} }, "data-dark": dark ? "true" : undefined, className: clsx_1.clsx(className, "group relative flex flex-col overflow-hidden rounded-lg", "bg-transparent shadow-sm ring-1  ring-white/5", "data:bg-transparent data-:ring-white/5") },
        React.createElement("div", { className: "relative h-80 shrink-0" },
            graphic,
            fade.includes("top") && (React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-950 group-data-[dark]:from-[-25%]" })),
            fade.includes("bottom") && (React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-950 group-data-[dark]:from-[-25%]" })))));
}
exports.BentoCard = BentoCard;

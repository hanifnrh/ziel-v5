"use client";
"use strict";
exports.__esModule = true;
exports.Timeline = void 0;
var utils_1 = require("@/lib/utils");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var dot_pattern_1 = require("./dot-pattern");
exports.Timeline = function (_a) {
    var data = _a.data;
    var ref = react_1.useRef(null);
    var containerRef = react_1.useRef(null);
    var _b = react_1.useState(0), height = _b[0], setHeight = _b[1];
    react_1.useEffect(function () {
        if (ref.current) {
            var rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);
    var scrollYProgress = framer_motion_1.useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"]
    }).scrollYProgress;
    var heightTransform = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0, height]);
    var opacityTransform = framer_motion_1.useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    return (react_1["default"].createElement("div", { className: "body w-full", ref: containerRef },
        react_1["default"].createElement(dot_pattern_1.DotPattern, { className: utils_1.cn("[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-40") }),
        react_1["default"].createElement("div", { className: "w-full mx-auto" },
            react_1["default"].createElement("h2", { className: "text-4xl sm:text-3xl lg:text-5xl mb-2 lg:mb-4 body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-400 dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "Where others see numbers, I paint stories."),
            react_1["default"].createElement("p", { className: "text-neutral-500 body-light text-sm lg:text-lg max-w-4xl" }, "I grow up in a rural area of Bekasi, West Java, Indonesia. Kind of not-so-artsy place to grow up in. But however, I survive with my little sketchbook. How does this have anything to do with programming? Well here is a brief story about my life and also my studies.")),
        react_1["default"].createElement("div", { ref: ref, className: "relative w-full mx-auto pb-20" },
            data.map(function (item, index) { return (react_1["default"].createElement("div", { key: index, className: "flex justify-start pt-10 lg:pt-40 lg:gap-10" },
                react_1["default"].createElement("div", { className: "sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full" },
                    react_1["default"].createElement("div", { className: "h-10 absolute left-3 lg:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center" },
                        react_1["default"].createElement("div", { className: "h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" })),
                    react_1["default"].createElement("h3", { className: "hidden lg:block text-xl lg:pl-20 lg:text-4xl body tracking-tighter text-neutral-500 dark:text-neutral-500 " }, item.title)),
                react_1["default"].createElement("div", { className: "relative pl-20 lg:pl-4 w-full" },
                    react_1["default"].createElement("h3", { className: "lg:hidden block text-2xl mb-4 text-left body tracking-tighter text-neutral-200" }, item.title),
                    item.content,
                    " "))); }),
            react_1["default"].createElement("div", { style: {
                    height: height + "px"
                }, className: "absolute lg:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] " },
                react_1["default"].createElement(framer_motion_1.motion.div, { style: {
                        height: heightTransform,
                        opacity: opacityTransform
                    }, className: "absolute inset-x-0 top-0 z-50 w-[2px] bg-gradient-to-t from-purple-500 via-indigo-500 to-transparent from-[0%] via-[10%] rounded-full" })))));
};

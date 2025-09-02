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
exports.AnimatedGridPattern = void 0;
var react_1 = require("motion/react");
var react_2 = require("react");
var utils_1 = require("@/lib/utils");
function AnimatedGridPattern(_a) {
    var _b = _a.width, width = _b === void 0 ? 40 : _b, _c = _a.height, height = _c === void 0 ? 40 : _c, _d = _a.x, x = _d === void 0 ? -1 : _d, _e = _a.y, y = _e === void 0 ? -1 : _e, _f = _a.strokeDasharray, strokeDasharray = _f === void 0 ? 0 : _f, _g = _a.numSquares, numSquares = _g === void 0 ? 50 : _g, className = _a.className, _h = _a.maxOpacity, maxOpacity = _h === void 0 ? 0.5 : _h, _j = _a.duration, duration = _j === void 0 ? 4 : _j, _k = _a.repeatDelay, repeatDelay = _k === void 0 ? 0.5 : _k, props = __rest(_a, ["width", "height", "x", "y", "strokeDasharray", "numSquares", "className", "maxOpacity", "duration", "repeatDelay"]);
    var id = react_2.useId();
    var containerRef = react_2.useRef(null);
    var _l = react_2.useState({ width: 0, height: 0 }), dimensions = _l[0], setDimensions = _l[1];
    var _m = react_2.useState(function () { return generateSquares(numSquares); }), squares = _m[0], setSquares = _m[1];
    function getPos() {
        return [
            Math.floor((Math.random() * dimensions.width) / width),
            Math.floor((Math.random() * dimensions.height) / height),
        ];
    }
    // Adjust the generateSquares function to return objects with an id, x, and y
    function generateSquares(count) {
        return Array.from({ length: count }, function (_, i) { return ({
            id: i,
            pos: getPos()
        }); });
    }
    // Function to update a single square's position
    var updateSquarePosition = function (id) {
        setSquares(function (currentSquares) {
            return currentSquares.map(function (sq) {
                return sq.id === id
                    ? __assign(__assign({}, sq), { pos: getPos() }) : sq;
            });
        });
    };
    // Update squares to animate in
    react_2.useEffect(function () {
        if (dimensions.width && dimensions.height) {
            setSquares(generateSquares(numSquares));
        }
    }, [dimensions, numSquares]);
    // Resize observer to update container dimensions
    react_2.useEffect(function () {
        var resizeObserver = new ResizeObserver(function (entries) {
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return function () {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, [containerRef]);
    return (React.createElement("svg", __assign({ ref: containerRef, "aria-hidden": "true", className: utils_1.cn("pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/30 stroke-neutral-400/30", className) }, props),
        React.createElement("defs", null,
            React.createElement("pattern", { id: id, width: width, height: height, patternUnits: "userSpaceOnUse", x: x, y: y },
                React.createElement("path", { d: "M.5 " + height + "V.5H" + width, fill: "none", strokeDasharray: strokeDasharray }))),
        React.createElement("rect", { width: "100%", height: "100%", fill: "url(#" + id + ")" }),
        React.createElement("svg", { x: x, y: y, className: "overflow-visible" }, squares.map(function (_a, index) {
            var _b = _a.pos, x = _b[0], y = _b[1], id = _a.id;
            return (React.createElement(react_1.motion.rect, { initial: { opacity: 0 }, animate: { opacity: maxOpacity }, transition: {
                    duration: duration,
                    repeat: 1,
                    delay: index * 0.1,
                    repeatType: "reverse"
                }, onAnimationComplete: function () { return updateSquarePosition(id); }, key: x + "-" + y + "-" + index, width: width - 1, height: height - 1, x: x * width + 1, y: y * height + 1, fill: "currentColor", strokeWidth: "0" }));
        }))));
}
exports.AnimatedGridPattern = AnimatedGridPattern;

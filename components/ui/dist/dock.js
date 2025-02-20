"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
// Import ModeToggle from the external file
var navItems = [
    {
        id: 1,
        label: "Home",
        href: "/",
        icon: React.createElement(lucide_react_1.Atom, { className: "h-full w-full" })
    },
    {
        id: 2,
        label: "About",
        href: "/about",
        icon: React.createElement(lucide_react_1.Bolt, { className: "h-full w-full" })
    },
    {
        id: 3,
        label: "Guestbook",
        href: "/guestbook",
        icon: React.createElement(lucide_react_1.BookOpenText, { className: "h-full w-full" })
    },
    {
        id: 4,
        label: "Blog",
        href: "/blog",
        icon: React.createElement(lucide_react_1.PencilLine, { className: "h-full w-full" })
    },
    {
        id: 4,
        label: "Projects",
        href: "/projects",
        icon: React.createElement(lucide_react_1.PanelsTopLeft, { className: "h-full w-full" })
    },
];
var Dock = function () {
    var _a;
    var pathname = navigation_1.usePathname();
    var _b = next_themes_1.useTheme(), theme = _b.theme, setTheme = _b.setTheme;
    var _c = react_1.useState(((_a = navItems.find(function (item) { return item.href === pathname; })) === null || _a === void 0 ? void 0 : _a.id) || null), activeTab = _c[0], setActiveTab = _c[1];
    react_1.useEffect(function () {
        var _a;
        setActiveTab(((_a = navItems.find(function (item) { return item.href === pathname; })) === null || _a === void 0 ? void 0 : _a.id) || null);
    }, [pathname]);
    var duration = 0.4;
    var dockVariants = {
        open: {
            width: "fit-content",
            opacity: 1,
            transition: {
                easeInOut: framer_motion_1.easeInOut,
                duration: duration
            }
        },
        closed: {
            width: 0,
            opacity: 0,
            transition: {
                easeInOut: framer_motion_1.easeInOut,
                duration: duration
            }
        }
    };
    var initialX = activeTab !== null ? (activeTab - 1) * 40 : 0;
    return (React.createElement(framer_motion_1.motion.div, { variants: dockVariants, initial: "closed", animate: "open", className: "md:hidden dock-shadow fixed inset-x-0 bottom-8 z-50 mx-auto rounded-2xl bg-zinc-950/60 border border-zinc-800 backdrop-blur-sm p-1" },
        React.createElement("div", { className: "relative flex items-center" },
            activeTab !== null && (React.createElement(framer_motion_1.motion.span, { className: "absolute bottom-0 top-0 z-[99] w-10 rounded-[12px] mix-blend-difference outline-none ring-0 bg-purple-600/20", initial: { translateX: initialX, opacity: 0, scale: 0 }, animate: { translateX: (activeTab - 1) * 40, opacity: 1, scale: 1 }, transition: { type: "spring", bounce: 0.2, duration: 0.6 } })),
            navItems.map(function (item) {
                return item.href ? (React.createElement(link_1["default"], { key: item.id, href: item.href, scroll: true, onClick: function () { return setActiveTab(item.id); }, className: (activeTab === item.id
                        ? "text-purple-500"
                        : "text-zinc-200") + " group/dock relative h-10 w-10 p-3 text-sm transition-all duration-300 ease-in-out focus-visible:outline-none", style: {
                        WebkitTapHighlightColor: "transparent"
                    }, "aria-label": item.label },
                    item.icon,
                    React.createElement("span", { className: "absolute -top-8 left-1/2 hidden -translate-x-1/2 -translate-y-2 scale-75 rounded-md border bg-purple-600/20 p-1 px-1.5 text-[10px] font-medium leading-none text-foreground opacity-0 transition-all duration-200 ease-in-out group-hover/dock:translate-y-0 group-hover/dock:scale-100 group-hover/dock:opacity-100 md:block" }, item.label))) : (React.createElement("div", { key: item.id, onClick: function () {
                        // ModeToggle will handle the theme change
                    }, className: "group/dock relative h-10 w-10 text-sm text-zinc-500 transition-all duration-300 ease-in-out focus-visible:outline-none items-center justify-center flex", "aria-label": "Change theme button" },
                    item.icon,
                    React.createElement("span", { className: "absolute -top-8 left-1/2 hidden -translate-x-1/2 -translate-y-2 scale-75 rounded-md border bg-popover p-1 px-1.5 text-[10px] font-medium leading-none text-foreground opacity-0 transition-all duration-200 ease-in-out group-hover/dock:translate-y-0 group-hover/dock:scale-100 group-hover/dock:opacity-100 md:block" }, item.label)));
            }))));
};
exports["default"] = Dock;

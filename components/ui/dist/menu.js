"use client";
"use strict";
exports.__esModule = true;
var buttoncopy_1 = require("@/components/ui/buttoncopy");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var dialog_1 = require("./dialog");
var menuprovider_1 = require("./menuprovider");
var Menu = function () {
    var _a = menuprovider_1.useMenu(), isDialogOpen = _a.isDialogOpen, closeMenu = _a.closeMenu, openMenu = _a.openMenu;
    var emailToCopy = "dailyziel@gmail.com";
    react_1.useEffect(function () {
        var handleKeyDown = function (event) {
            if (event.ctrlKey && event.key === "q") {
                openMenu();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return function () {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [openMenu]);
    return (react_1["default"].createElement(dialog_1.Dialog, { open: isDialogOpen, onOpenChange: closeMenu },
        react_1["default"].createElement(dialog_1.DialogContent, { className: "body bg-neutral-950/80 backdrop-blur-xs sm:max-w-md flex flex-col items-center justify-center" },
            react_1["default"].createElement("div", { className: "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent  to-transparent via-purple-700/10 opacity-40 transition-opacity duration-300" }),
            react_1["default"].createElement(dialog_1.DialogHeader, null,
                react_1["default"].createElement(dialog_1.DialogTitle, { className: "text-center text-zinc-200" }, "Menu"),
                react_1["default"].createElement(dialog_1.DialogDescription, { className: "text-center body-light text-zinc-200" }, "Get in touch with me")),
            react_1["default"].createElement("div", { className: "w-full flex flex-col items-center justify-center gap-y-2" },
                react_1["default"].createElement("div", { className: "flex justify-center w-52" },
                    react_1["default"].createElement(buttoncopy_1["default"], { textToCopy: emailToCopy, successDuration: 3000 })),
                react_1["default"].createElement("div", { className: "flex items-center justify-center w-52" },
                    react_1["default"].createElement(link_1["default"], { href: "/#contact", className: "w-full", rel: "canonical" },
                        react_1["default"].createElement(dialog_1.DialogClose, { asChild: true },
                            react_1["default"].createElement("div", { style: { transform: "none" } },
                                react_1["default"].createElement("div", { className: "w-full group relative inline-block cursor-pointer rounded-xl bg-zinc-900/10 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900" },
                                    react_1["default"].createElement("span", { className: "absolute inset-0 overflow-hidden rounded-xl" },
                                        react_1["default"].createElement("span", { className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(129,140,248,0.6)_0%,rgba(129,140,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, " "),
                                        " "),
                                    react_1["default"].createElement("div", { className: "body-light relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10" },
                                        react_1["default"].createElement("span", null, "Book my service"),
                                        react_1["default"].createElement(lucide_react_1.Package, { className: "w-4 h-4" })),
                                    react_1["default"].createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40" }))))))),
            react_1["default"].createElement(dialog_1.DialogFooter, { className: "flex flex-col justify-center items-center w-52" },
                react_1["default"].createElement(dialog_1.DialogClose, { asChild: true },
                    react_1["default"].createElement("div", { style: { transform: "none" }, className: "w-full" },
                        react_1["default"].createElement("div", { className: "w-full group relative inline-block cursor-pointer rounded-xl bg-red-900/10 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900" },
                            react_1["default"].createElement("span", { className: "absolute inset-0 overflow-hidden rounded-xl" },
                                react_1["default"].createElement("span", { className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(248,113,113,0.6)_0%,rgba(248,113,113,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, " "),
                                " "),
                            react_1["default"].createElement("div", { className: "justify-center body-light text-red-900 relative z-10 flex items-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10" },
                                react_1["default"].createElement("span", null, "Close")),
                            react_1["default"].createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40" }))))))));
};
exports["default"] = Menu;

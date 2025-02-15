"use client";
"use strict";
exports.__esModule = true;
var use_copy_to_clipboard_1 = require("@/components/hooks/use-copy-to-clipboard");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var use_toast_1 = require("./use-toast");
function CopyButton(_a) {
    var textToCopy = _a.textToCopy, _b = _a.successDuration, successDuration = _b === void 0 ? 1000 : _b;
    var _c = use_copy_to_clipboard_1.useCopyToClipboard({ timeout: successDuration }), isCopied = _c.isCopied, copyToClipboard = _c.copyToClipboard;
    var toast = use_toast_1.useToast().toast;
    var _d = react_1.useState(false), copied = _d[0], setCopied = _d[1];
    function handleCopy() {
        if (isCopied)
            return;
        copyToClipboard(textToCopy);
        setCopied(true);
        toast({
            title: "Copied to Clipboard",
            description: "\"" + textToCopy + "\" copied successfully."
        });
        setTimeout(function () { return setCopied(false); }, 3000);
    }
    return (React.createElement("div", { style: { transform: "none" }, onClick: handleCopy, className: "w-full max-w-xs" },
        React.createElement("div", { className: "w-full group relative inline-block cursor-pointer rounded-xl bg-zinc-900/10 p-px leading-6 text-white no-underline shadow-2xl shadow-zinc-900" },
            React.createElement("span", { className: "absolute inset-0 overflow-hidden rounded-xl" },
                React.createElement("span", { className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, " "),
                " "),
            React.createElement("div", { className: "body-light relative z-10 flex items-center justify-center space-x-2 rounded-xl bg-gray-950/50 px-6 py-3 ring-1 ring-white/10" }, copied ? (React.createElement(React.Fragment, null,
                React.createElement(lucide_react_1.Check, { className: "w-4 h-4 text-emerald-400" }),
                React.createElement("span", null, "Copied!"))) : (React.createElement(React.Fragment, null,
                React.createElement("span", null, "Copy my email"),
                React.createElement(lucide_react_1.Copy, { className: "w-4 h-4" })))),
            React.createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-gray-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40" }))));
}
exports["default"] = CopyButton;

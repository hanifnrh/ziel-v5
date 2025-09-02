"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// Components
var content_form_1 = require("@/components/form/content-form");
var guestbook_1 = require("@/components/macro/guestbook");
var button_1 = require("@/components/ui/button");
var tracing_beam_1 = require("@/components/ui/tracing-beam");
// Utils
var fn_1 = require("@/utils/function/fn");
var server_1 = require("@/utils/supabase/server");
// Icons
var lucide_react_1 = require("lucide-react");
var fc_1 = require("react-icons/fc");
var Page = function () { return __awaiter(void 0, void 0, void 0, function () {
    var supabase, _a, user, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, server_1.createClient()];
            case 1:
                supabase = _b.sent();
                return [4 /*yield*/, supabase.auth.getUser()];
            case 2:
                _a = _b.sent(), user = _a.data, error = _a.error;
                return [2 /*return*/, (React.createElement("main", { className: "bg-neutral-950" },
                        React.createElement("section", { className: "py-28 z-10 p-8 pb-20 gap-16 px-8 md:px-20 2xl:px-52" },
                            React.createElement(tracing_beam_1.TracingBeam, null,
                                React.createElement("div", { id: "guestbook", className: "flex w-full grow flex-col gap-y-4" },
                                    React.createElement("div", { className: "flex h-full w-full flex-col justify-center items-start" },
                                        React.createElement("div", { className: "md:pad-x relative flex h-auto flex-col" },
                                            React.createElement("div", { className: "relative sm:pl-12 sm:pr-8 sm:px-0 h-full w-full grow grid grid-cols-1 items-center justify-center gap-6 sm:py-4 md:gap-8 md:py-6 lg:py-12" },
                                                React.createElement("div", { className: "relative z-10 flex h-fit flex-col" },
                                                    React.createElement("div", { className: "flex gap-2 items-center" },
                                                        React.createElement("div", { className: "flex items-center justify-center p-4 rounded-xl bg-purple-600/20 text-purple-600" },
                                                            React.createElement(lucide_react_1.BookOpenText, { size: 30 })),
                                                        React.createElement("h3", { className: "flex text-5xl body tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-200 dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]" }, "Guestbook")),
                                                    React.createElement("p", { className: "w-full mb-4 mt-2 body-light tracking-tighter text-md sm:text-lg text-neutral-500" }, "Leave a message of your impression of this website, or you can say anything!"),
                                                    user && user.user ? (React.createElement(React.Fragment, null,
                                                        React.createElement("form", { onSubmit: fn_1.signOut, className: "mt-1 py-2" },
                                                            React.createElement(button_1.Button, { className: "px-0 py-2 justify-start" },
                                                                React.createElement("div", { style: { transform: "none" } },
                                                                    React.createElement("div", { className: "group relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-2xl shadow-neutral-900" },
                                                                        React.createElement("span", { className: "absolute inset-0 overflow-hidden rounded-xl" },
                                                                            React.createElement("span", { className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(199,1,220,0.6)_0%,rgba(199,1,220,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, " "),
                                                                            " "),
                                                                        React.createElement("div", { className: "body-light relative z-10 flex items-center space-x-2 rounded-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10" },
                                                                            React.createElement("span", null, "Sign Out"),
                                                                            React.createElement(lucide_react_1.LogOut, null)),
                                                                        React.createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40" }))))),
                                                        React.createElement(content_form_1["default"], { user: user.user }))) : (React.createElement("div", { className: "flex flex-col sm:flex-row gap-4" },
                                                        React.createElement("form", { onSubmit: fn_1.githubSignIn, className: "group py-2" },
                                                            React.createElement(button_1.Button, { className: "px-0 py-2" },
                                                                React.createElement("div", { style: { transform: "none" } },
                                                                    React.createElement("div", { className: "relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-2xl shadow-neutral-900" },
                                                                        React.createElement("span", { className: "absolute inset-0 overflow-hidden rounded-xl" },
                                                                            React.createElement("span", { className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(79,70,229,0.6)_0%,rgba(79,70,229,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, " "),
                                                                            " "),
                                                                        React.createElement("div", { className: "body-light relative z-10 flex items-center space-x-2 rounded-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10" },
                                                                            React.createElement("span", null, "Sign in with GitHub"),
                                                                            React.createElement(lucide_react_1.Github, null)),
                                                                        React.createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-600/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40" }))))),
                                                        React.createElement("form", { onSubmit: fn_1.googleSignIn, className: "group py-2" },
                                                            React.createElement(button_1.Button, { className: "px-0 py-2" },
                                                                React.createElement("div", { style: { transform: "none" } },
                                                                    React.createElement("div", { className: "relative inline-block cursor-pointer rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-2xl shadow-neutral-900" },
                                                                        React.createElement("span", { className: "absolute inset-0 overflow-hidden rounded-xl" },
                                                                            React.createElement("span", { className: "absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(225,29,72,0.6)_0%,rgba(225,29,72,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, " "),
                                                                            " "),
                                                                        React.createElement("div", { className: "body-light relative z-10 flex items-center space-x-2 rounded-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10" },
                                                                            React.createElement("span", null, "Sign in with Google"),
                                                                            React.createElement(fc_1.FcGoogle, null)),
                                                                        React.createElement("span", { className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-rose-600/0 via-neutral-400/90 to-fuchsia-400/0 transition-opacity duration-500 group-hover:opacity-40" })))))))),
                                                React.createElement(guestbook_1["default"], null)))))))))];
        }
    });
}); };
exports["default"] = Page;

"use client";
"use strict";
exports.__esModule = true;
var animated_card_1 = require("@/components/ui/animated-card");
var marquee_1 = require("@/components/ui/marquee");
var react_1 = require("@nextui-org/react");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var react_2 = require("react");
var ai_1 = require("react-icons/ai");
var fa_1 = require("react-icons/fa");
var bento_card_1 = require("../ui/bento-card");
function Bento() {
    var _a = react_2.useState(null), track = _a[0], setTrack = _a[1];
    react_2.useEffect(function () {
        fetch("/api/spotify/recently-played")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (!data.error) {
                setTrack(data);
            }
        });
    }, []);
    if (!track)
        return null; // Hide component if no track found
    var companies = [
        {
            name: "Next.js",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png"
        },
        {
            name: "GitHub",
            url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/GitHub_honend.svg"
        },
        {
            name: "Figma",
            url: "https://1000logos.net/wp-content/uploads/2024/09/Figma-Logo.png"
        },
        {
            name: "Tailwind",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png"
        },
        {
            name: "React",
            url: "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
        },
        {
            name: "Laravel",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png"
        },
        {
            name: "Vercel",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/640px-Vercel_logo_black.svg.png"
        },
    ];
    return (React.createElement("div", { className: "w-full grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-2 pb-20 px-8 md:px-20 2xl:px-52 text-zinc-200" },
        React.createElement("div", { className: "w-full gap-2 grid grid-cols-1" },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2" },
                React.createElement("div", { className: "" },
                    React.createElement(animated_card_1.MainMenusGradientCard, { description: "Design tools and code tools I mainly use. Focused on React or Javascript ecosystem, recently have been using Next.js", title: "Tech stack I mainly use" },
                        React.createElement("h2", { className: "text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                            React.createElement(lucide_react_1.Atom, { className: "inline w-4 h-4 mr-2  duration-300" }),
                            "Tech Stack"),
                        React.createElement("section", { id: "logos" },
                            React.createElement("div", { className: "container mx-auto " },
                                React.createElement("div", { className: "relative mt-6" },
                                    React.createElement(marquee_1.Marquee, { className: "max-w-full [--duration:40s]" }, companies.map(function (company, idx) { return (React.createElement(image_1["default"], { key: idx, width: 112, height: 40, src: company.url, className: "h-10 w-28 object-contain opacity-30 grayscale brightness-0 invert", alt: company.name })); })),
                                    React.createElement("div", { className: "pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent" }),
                                    React.createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent" })))))),
                React.createElement("div", { className: "hidden lg:block" },
                    React.createElement(bento_card_1.BentoCard, null,
                        React.createElement("h2", { className: "text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                            React.createElement(fa_1.FaRegKeyboard, { className: "inline w-4 h-4 mr-2  duration-300" }),
                            "Typing Speed"),
                        React.createElement("div", { className: "mt-5 flex justify-start items-end  body-bold text-zinc-200" },
                            React.createElement("h3", { className: "text-6xl xl:text-8xl" }, "116"),
                            React.createElement("p", { className: "text-lg" }, "wpm")),
                        React.createElement("div", { className: "mt-5  flex sm:items-start gap-2 lg:gap-0 lg:justify-between body-light text-sm text-zinc-200" },
                            React.createElement("p", { className: "inline-flex items-center justify-center" },
                                React.createElement(lucide_react_1.Timer, { size: 15, className: "mr-1" }),
                                "1 minute"),
                            React.createElement("p", { className: "inline-flex items-center justify-center" },
                                React.createElement(lucide_react_1.Target, { size: 15, className: "mr-1" }),
                                "99%"),
                            React.createElement("p", { className: "inline-flex items-center justify-center" },
                                React.createElement(lucide_react_1.Languages, { size: 15, className: "mr-1" }),
                                "ID"))))),
            React.createElement("div", { className: "hidden sm:grid lg:hidden grid-cols-2 gap-2" },
                React.createElement("div", { className: "" },
                    React.createElement(bento_card_1.BentoCard, null,
                        React.createElement("h2", { className: "text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                            React.createElement(lucide_react_1.MapPin, { className: "inline w-4 h-4 mr-2  duration-300" }),
                            "Location"),
                        React.createElement("div", { className: " mt-5" },
                            React.createElement("div", { className: "relative" },
                                React.createElement(image_1["default"], { src: "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/location.png", width: 1000, height: 1000, alt: "Location in Bekasi, West Java", className: "w-full z-20 rounded-xl object-cover aspect-video grayscale invert" }),
                                React.createElement("div", { className: "absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light" }))))),
                React.createElement("div", { className: "" },
                    React.createElement(bento_card_1.BentoCard, null,
                        React.createElement("h2", { className: "text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                            React.createElement(fa_1.FaRegKeyboard, { className: "inline w-4 h-4 mr-2  duration-300" }),
                            "Typing Speed"),
                        React.createElement("div", { className: "mt-5 flex justify-start items-end  body-bold text-zinc-200" },
                            React.createElement("h3", { className: "text-6xl xl:text-8xl" }, "116"),
                            React.createElement("p", { className: "text-lg" }, "wpm")),
                        React.createElement("div", { className: "mt-5  flex sm:items-start gap-2 lg:gap-0 lg:justify-between body-light text-sm text-zinc-200" },
                            React.createElement("p", { className: "inline-flex items-center justify-center" },
                                React.createElement(lucide_react_1.Timer, { size: 15, className: "mr-1" }),
                                "1 minute"),
                            React.createElement("p", { className: "inline-flex items-center justify-center" },
                                React.createElement(lucide_react_1.Target, { size: 15, className: "mr-1" }),
                                "99%"),
                            React.createElement("p", { className: "inline-flex items-center justify-center" },
                                React.createElement(lucide_react_1.Languages, { size: 15, className: "mr-1" }),
                                "ID"))))),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2" },
                React.createElement("div", { className: "sm:hidden lg:block" },
                    React.createElement(bento_card_1.BentoCard, null,
                        React.createElement("h2", { className: "text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                            React.createElement(lucide_react_1.MapPin, { className: "inline w-4 h-4 mr-2  duration-300" }),
                            "Location"),
                        React.createElement("div", { className: " mt-5" },
                            React.createElement("div", { className: "relative" },
                                React.createElement(image_1["default"], { src: "https://zielbucket.s3.ap-southeast-2.amazonaws.com/public/images/location.png", width: 1000, height: 1000, alt: "Location in Bekasi, West Java", className: "w-full z-20 rounded-xl object-cover aspect-video grayscale invert" }),
                                React.createElement("div", { className: "absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light" }))))),
                React.createElement("div", { className: "group" },
                    React.createElement(bento_card_1.BentoCard, null,
                        React.createElement("div", { className: "flex justify-between items-center " },
                            React.createElement("h2", { className: "text-sm  text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                                React.createElement(ai_1.AiOutlineSpotify, { className: "inline w-4 h-4 mr-2  duration-300 transition-all" }),
                                "Spotify Last Played"),
                            React.createElement("div", { className: "text-zinc-200 text-3xl group-hover:text-green-600" },
                                React.createElement(fa_1.FaSpotify, null))),
                        React.createElement("div", { className: "flex flex-col sm:flex-row gap-4  mt-5 items-start sm:items-center" },
                            React.createElement(image_1["default"], { src: track.albumImageUrl, width: 1000, height: 1000, alt: "Spotify Last Played", className: "h-32 w-auto rounded-xl" }),
                            React.createElement("div", { className: "flex flex-col" },
                                React.createElement("h3", { className: "body text-2xl" }, track.name),
                                React.createElement("p", { className: "body-light text-lg" }, track.artist),
                                React.createElement(react_1.Link, { href: track.spotifyUrl, rel: "canonical", target: "_blank", className: "body-light text-lg w-fit text-green-600 border-b border-green-600" },
                                    "Play on Spotify",
                                    React.createElement(lucide_react_1.MoveRight, { className: "ml-2" })))))))),
        React.createElement("div", { className: "" },
            React.createElement(animated_card_1.MainMenusGradientCard, { description: "Projects I have been working on and finished, both personal and work projects.", title: "Projects" },
                React.createElement("h2", { className: "text-sm text-gray-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
                    React.createElement(lucide_react_1.FolderGit2, { className: "inline w-4 h-4 mr-2 duration-300" }),
                    "Projects"),
                React.createElement("ul", { className: "body-light flex flex-col gap-4 my-5" },
                    React.createElement("li", null,
                        React.createElement(react_1.Link, { href: "https://clipvision.vercel.app/", rel: "canonical", target: "_blank", className: "border-b py-2 w-full flex justify-between text-zinc-200" },
                            "Clipvision",
                            React.createElement(lucide_react_1.ArrowUpRight, null))),
                    React.createElement("li", null,
                        React.createElement(react_1.Link, { href: "https://www.ecofix.id/", rel: "canonical", target: "_blank", className: "border-b py-2 w-full flex justify-between text-zinc-200" },
                            "Ecofix",
                            React.createElement(lucide_react_1.ArrowUpRight, null))),
                    React.createElement("li", null,
                        React.createElement(react_1.Link, { href: "https://www.lancarin.com/", rel: "canonical", target: "_blank", className: "border-b py-2 w-full flex justify-between text-zinc-200" },
                            "Lancarin.com",
                            React.createElement(lucide_react_1.ArrowUpRight, null))),
                    React.createElement("li", null,
                        React.createElement(react_1.Link, { href: "https://www.figma.com/proto/4dpPY9tTTpaERumMd80OqI/Academiku?page-id=0%3A1&node-id=90-837&viewport=505%2C2553%2C0.87&t=tt3fxops6J46CJzg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=290%3A1758&show-proto-sidebar=1", rel: "canonical", target: "_blank", className: "border-b py-2 w-full flex justify-between text-zinc-200" },
                            "Academiku",
                            React.createElement(lucide_react_1.ArrowUpRight, null))),
                    React.createElement("li", null,
                        React.createElement(react_1.Link, { href: "https://www.figma.com/proto/JOBOHqk9w13ZWEth8bbTTZ/jiwakita?page-id=170%3A2702&node-id=874-30730&starting-point-node-id=874%3A25000&t=doKBH4JOUhc4Ac5I-1", rel: "canonical", target: "_blank", className: "border-b py-2 w-full flex justify-between text-zinc-200" },
                            "Jiwakita",
                            React.createElement(lucide_react_1.ArrowUpRight, null))))))));
}
exports["default"] = Bento;

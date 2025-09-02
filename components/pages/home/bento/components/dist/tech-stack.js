"use strict";
exports.__esModule = true;
var animated_card_1 = require("@/components/ui/animated-card");
var marquee_1 = require("@/components/ui/marquee");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
function TechStack() {
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
    return (React.createElement(animated_card_1.MainMenusGradientCard, { description: "Design tools and code tools I mainly use. Focused on React or Javascript ecosystem, recently have been using Next.js", title: "Tech stack I mainly use" },
        React.createElement("h2", { className: "text-sm text-neutral-800 dark:text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center" },
            React.createElement(lucide_react_1.Atom, { className: "inline w-4 h-4 mr-2  duration-300" }),
            "Tech Stack"),
        React.createElement("section", { id: "logos" },
            React.createElement("div", { className: "container mx-auto " },
                React.createElement("div", { className: "relative mt-6" },
                    React.createElement(marquee_1.Marquee, { className: "max-w-full [--duration:40s]" }, companies.map(function (company, idx) { return (React.createElement(image_1["default"], { key: idx, width: 112, height: 40, src: company.url, className: "h-10 w-28 object-contain opacity-30 neutralscale brightness-0 dark:invert", alt: company.name })); })),
                    React.createElement("div", { className: "pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent" }),
                    React.createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent" }))))));
}
exports["default"] = TechStack;

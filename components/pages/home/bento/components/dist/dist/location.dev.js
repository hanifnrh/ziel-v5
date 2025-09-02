"use strict";

exports.__esModule = true;

var bento_card_1 = require("@/components/ui/bento-card");

var lucide_react_1 = require("lucide-react");

var image_1 = require("next/image");

function Location() {
  return React.createElement(bento_card_1.BentoCard, null, React.createElement("h2", {
    className: "text-sm text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center"
  }, React.createElement(lucide_react_1.MapPin, {
    className: "inline w-4 h-4 mr-2  duration-300"
  }), "Location"), React.createElement("div", {
    className: "rounded-xl mt-5"
  }, React.createElement("div", {
    className: "relative rounded-xl"
  }, React.createElement(image_1["default"], {
    src: "/location.png",
    width: 1000,
    height: 1000,
    alt: "Location in Bekasi, West Java",
    className: "w-full z-20 rounded-xl object-cover aspect-video neutralscale invert"
  }), React.createElement("div", {
    className: "absolute inset-0 bg-purple-800 opacity-70 mix-blend-soft-light rounded-xl"
  }))));
}

exports["default"] = Location;
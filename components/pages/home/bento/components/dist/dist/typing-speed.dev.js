"use strict";

exports.__esModule = true;

var bento_card_1 = require("@/components/ui/bento-card");

var lucide_react_1 = require("lucide-react");

var fa_1 = require("react-icons/fa");

function TypingSpeed() {
  return React.createElement("div", {
    className: "hidden lg:block"
  }, React.createElement(bento_card_1.BentoCard, null, React.createElement("h2", {
    className: "text-sm text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center"
  }, React.createElement(fa_1.FaRegKeyboard, {
    className: "inline w-4 h-4 mr-2  duration-300"
  }), "Typing Speed"), React.createElement("div", {
    className: "mt-5 flex justify-start items-end  body-bold text-neutral-200"
  }, React.createElement("h3", {
    className: "text-6xl xl:text-8xl"
  }, "116"), React.createElement("p", {
    className: "text-lg"
  }, "wpm")), React.createElement("div", {
    className: "mt-5  flex sm:items-start gap-2 lg:gap-0 lg:justify-between body-light text-sm text-neutral-200"
  }, React.createElement("p", {
    className: "inline-flex items-center justify-center"
  }, React.createElement(lucide_react_1.Timer, {
    size: 15,
    className: "mr-1"
  }), "1 minute"), React.createElement("p", {
    className: "inline-flex items-center justify-center"
  }, React.createElement(lucide_react_1.Target, {
    size: 15,
    className: "mr-1"
  }), "99%"), React.createElement("p", {
    className: "inline-flex items-center justify-center"
  }, React.createElement(lucide_react_1.Languages, {
    size: 15,
    className: "mr-1"
  }), "ID"))));
}

exports["default"] = TypingSpeed;
"use client";
"use strict";

exports.__esModule = true;

var bento_card_1 = require("@/components/ui/bento-card");

var lucide_react_1 = require("lucide-react");

var image_1 = require("next/image");

var link_1 = require("next/link");

var react_1 = require("react");

var ai_1 = require("react-icons/ai");

var fa_1 = require("react-icons/fa");

function Spotify() {
  var _a = react_1.useState(null),
      track = _a[0],
      setTrack = _a[1];

  react_1.useEffect(function () {
    fetch("/api/spotify/recently-played").then(function (res) {
      return res.json();
    }).then(function (data) {
      if (!data.error) {
        setTrack(data);
      }
    });
  }, []);
  if (!track) return null;
  return React.createElement(bento_card_1.BentoCard, null, React.createElement("div", {
    className: "flex justify-between items-center "
  }, React.createElement("h2", {
    className: "text-sm  text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex items-center"
  }, React.createElement(ai_1.AiOutlineSpotify, {
    className: "inline w-4 h-4 mr-2  duration-300 transition-all"
  }), "Spotify Last Played"), React.createElement("div", {
    className: "text-neutral-200 text-3xl group-hover:text-green-600"
  }, React.createElement(fa_1.FaSpotify, null))), React.createElement("div", {
    className: "flex flex-row gap-4 mt-5 items-center"
  }, React.createElement(image_1["default"], {
    src: track.albumImageUrl,
    width: 1000,
    height: 1000,
    alt: "Spotify Last Played",
    className: "sm:h-32 h-24 w-auto rounded-xl"
  }), React.createElement("div", {
    className: "flex flex-col"
  }, React.createElement("h3", {
    className: "body text-xl line-clamp-1"
  }, track.name), React.createElement("p", {
    className: "body-light text-base line-clamp-1"
  }, track.artist), React.createElement(link_1["default"], {
    href: track.spotifyUrl,
    rel: "canonical",
    target: "_blank",
    className: "body-light text-base w-fit text-green-600 border-b border-green-600"
  }, "Play on Spotify", React.createElement(lucide_react_1.MoveRight, {
    className: "ml-2"
  })))));
}

exports["default"] = Spotify;
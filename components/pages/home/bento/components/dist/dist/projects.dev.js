"use strict";

exports.__esModule = true;

var animated_card_1 = require("@/components/ui/animated-card");

var lucide_react_1 = require("lucide-react");

var link_1 = require("next/link");

var projects = [{
  name: 'Reality Club',
  href: 'https://realityclubmusic.netlify.app/'
}, {
  name: 'Ecofix',
  href: 'https://www.ecofix.id/'
}, {
  name: 'SIGMA',
  href: 'https://www.siggma-ta.com/'
}, {
  name: 'Academiku',
  href: 'https://www.figma.com/proto/4dpPY9tTTpaERumMd80OqI/Academiku?page-id=0%3A1&node-id=90-837&viewport=505%2C2553%2C0.87&t=tt3fxops6J46CJzg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=290%3A1758&show-proto-sidebar=1'
}, {
  name: 'Jiwakita',
  href: 'https://www.figma.com/proto/JOBOHqk9w13ZWEth8bbTTZ/jiwakita?page-id=170%3A2702&node-id=874-30730&starting-point-node-id=874%3A25000&t=doKBH4JOUhc4Ac5I-1'
}];

function Projects() {
  return React.createElement(animated_card_1.MainMenusGradientCard, {
    title: "Projects",
    description: "Projects I have been working on and finished, both personal and work projects."
  }, React.createElement("h2", {
    className: "text-sm text-neutral-400 group mr-auto px-5 py-2 bg-gradient-to-tr from-neutral-300/5 via-neutral-400/5 to-transparent border-[2px] border-white/5 rounded-3xl w-fit flex items-center"
  }, React.createElement(lucide_react_1.FolderGit2, {
    className: "inline w-4 h-4 mr-2 duration-300"
  }), "Projects"), React.createElement("ul", {
    className: "body-light flex flex-col gap-4 my-5"
  }, projects.map(function (project) {
    return React.createElement("li", {
      key: project.name
    }, React.createElement(link_1["default"], {
      href: project.href,
      rel: "canonical",
      target: "_blank",
      className: "border-b py-2 w-full flex justify-between text-neutral-200"
    }, project.name, React.createElement(lucide_react_1.ArrowUpRight, null)));
  })));
}

exports["default"] = Projects;
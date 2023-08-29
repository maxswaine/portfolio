import Project from "./types";
import webpage from "../../src/assets/images/webpage.png";
import typing from "../../src/assets/images/typing.png";
import calculator from "../../src/assets/images/calculator.png";
import brewdog from "../../src/assets/images/brewdog.png";

const projects: Project[] = [
  {
    name: "First Portfolio Websites",
    photo: webpage,
    languages: ["HTML", "SCSS", "JavaScript"],
    description: "Basic web portfolio.",
    link1: "https://github.com/maxswaine/web-project-0",
    link2: "https://maxswaine.github.io/web-project-0",
  },
  {
    name: "Calculator Project",
    photo: calculator,
    languages: ["HTML", "SCSS", "TypeScript"],
    description: "Basic web portfolio.",
    link1: "https://github.com/maxswaine/calculator-project",
    link2: "https://maxswaine.github.io/calculator-project",
  },
  {
    name: "Typing Game",
    photo: typing,
    languages: ["HTML", "SCSS", "TypeScript"],
    description: "Basic web portfolio.",
    link1: "https://github.com/maxswaine/typescript-game",
    link2: "https://maxswaine.github.io/typescript-game",
  },
  {
    name: "React Punk API",
    photo: brewdog,
    languages: ["React", "HTML", "SCSS", "TypeScript"],
    description: "Basic web portfolio.",
    link1: "https://github.com/maxswaine/react-punk-api",
    link2: "https://maxswaine.github.io/react-punk-api",
  },
];

export default projects;

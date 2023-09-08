import Project from "./types";
import webpage from "../../src/assets/images/webpage.png";
import typing from "../../src/assets/images/typing.png";
import calculator from "../../src/assets/images/calculator.png";
import brewdog from "../../src/assets/images/brewdog.png";
import dotToDot from "../../src/assets/images/Screenshot 2023-09-07 at 20.49.07.png";
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
    description:
      "Project where I created a functional calculator with a clean UI, dark mode and light mode.",
    link1: "https://github.com/maxswaine/calculator-project",
    link2: "https://maxswaine.github.io/calculator-project",
  },
  {
    name: "Typing Game",
    photo: typing,
    languages: ["HTML", "SCSS", "TypeScript"],
    description:
      "A basic web game in Typescript where the Random Word API is accessed and the user has to type more and more words as the levels increase",
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
  {
    name: "Dot to Dot Client Project",
    photo: dotToDot,
    languages: ["React", "TypeScript", "SCSS", "Firebase"],
    description:
      "I was Project Owner for our Client Project to create an application to unite local communities and event curators. Not only was I responsible for ticket management and creation but also worked with the Firebase Database to create app functionality.",
    link1: "https://github.com/nology-tech/Union-Client-Project",
    link2: "https://union-client-project.web.app/",
  },
];

export default projects;

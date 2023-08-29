import "./Skills.scss";
import html from "../../assets/images/Skill=HTML5 11.54.21.svg";
import css from "../../assets/images/Skill=CSS3 11.54.21.svg";
import scss from "../../assets/images/Skill=SCSS 11.54.21.svg";
import bem from "../../assets/images/Skill=BEM 11.54.21.svg";
import git from "../../assets/images/Skill=Git 11.54.21.svg";
import react from "../../assets/images/Skill=React 11.54.21.svg";
import javascript from "../../assets/images/Skill=JavaScript 11.54.21.svg";
import java from "../../assets/images/Skill=Java 11.54.21.svg";
import springboot from "../../assets/images/Skill=Spring Boot 11.54.21.svg";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Technical Skills</h2>
      <div className="skills-grid">
        <img className="skills__image" src={git} alt="git icon" />
        <img className="skills__image" src={html} alt="html icon" />
        <img className="skills__image" src={css} alt="css icon" />
        <img className="skills__image" src={javascript} alt="javascript icon" />
        <img className="skills__image" src={scss} alt="scss icon" />
        <img className="skills__image" src={bem} alt="BEM icon" />
        <img className="skills__image" src={react} alt="react icon" />
        <img className="skills__image" src={java} alt="java icon" />
        <img
          className="skills__image"
          src={springboot}
          alt="spring boot icon"
        />
      </div>
    </section>
  );
};

export default Skills;

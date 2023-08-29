import { Link } from "react-router-dom";
import Project from "../../Data/types";
import code from "../../assets/images/Code.svg";
import preview from "../../assets/images/Preview.svg";
import "./ProjectCard.scss";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img
        className="project-card__image"
        src={project.photo}
        alt="project photo"
      />
      <h3 className="project-card__languages">
        {project.languages.map((language) => {
          return `${language} `;
        })}
      </h3>
      <h2 className="project-card__title">{project.name}</h2>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__button-container">
        <Link to={project.link1}>
          <img
            className="project-card__button"
            src={code}
            alt="Press for code"
          />
        </Link>
        <Link to={project.link2}>
          <img
            className="project-card__button"
            src={preview}
            alt="press for webpage"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

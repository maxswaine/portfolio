import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Project from "../../Data/types";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">My Projects</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card-container__item" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

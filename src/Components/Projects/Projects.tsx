import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Project from "../../Data/types";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="projects">
      <h2 className="projects__title">My Projects</h2>
      <div className="card-container">
        <div className="card-container__item">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

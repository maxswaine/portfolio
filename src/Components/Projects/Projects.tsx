import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Project from "../../Data/types";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="card-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;

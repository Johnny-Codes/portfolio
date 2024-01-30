import ProjectCard from "./ProjectCard";
import projects from "./ProjectInfo";

function ProjectComponent() {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}

export default ProjectComponent;

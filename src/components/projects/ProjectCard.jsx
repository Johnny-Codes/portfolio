import { FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiVite } from "react-icons/si";

const techs = {
  python: <FaPython />,
  fastapi: <SiFastapi />,
  postgresql: <SiPostgresql />,
  react: <FaReact />,
  vite: <SiVite />,
};

const ProjectCard = (project) => {
  const pr = project.project;
  return (
    <project-card key={pr.id}>
      <h3 className="project-title">{pr.title}</h3>
      <p className="project-description">
        {pr.youtube && <a href={pr.youtube}>YouTube</a>}
        {pr.description}
      </p>
      <p className="project-technologies">
        {pr.technologies.map((tech) => {
          return techs[tech];
        })}
      </p>
      <img src={pr.image} className="project-hero" />
    </project-card>
  );
};

export default ProjectCard;

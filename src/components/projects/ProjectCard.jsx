import { useState } from "react";
import { FaPython, FaReact } from "react-icons/fa";
import {
  SiFastapi,
  SiPostgresql,
  SiVite,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";

const techs = {
  python: <FaPython />,
  django: <SiDjango />,
  fastapi: <SiFastapi />,
  postgresql: <SiPostgresql />,
  react: <FaReact />,
  vite: <SiVite />,
  tailwindcss: <SiTailwindcss />,
};

const ProjectCard = (project) => {
  const pr = project.project;
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (tech) => {
    setTooltip(tech);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };
  return (
    <project-card key={pr.id} className="flex flex-col items-center">
      <h3 className="text-3xl my-4 underline">{pr.title}</h3>
      <p className="py-4 indent-8 text-lg">
        {pr.youtube && (
          <p className="py-4 indent-8 text-lg">
            <a
              href={pr.youtube}
              className="hover:cursor-pointer hover:underline hover:text-gray-400"
            >
              YouTube
            </a>
          </p>
        )}
        {pr.website && (
          <p className="py-4 indent-8 text-lg">
            <a
              href={pr.website}
              className="hover:cursor-pointer hover:underline hover:text-gray-400"
            >
              Visit Live
            </a>
          </p>
        )}
        <p className="py-4 indent-8 text-lg">{pr.description}</p>
      </p>
      <p className="py-4 indent-8 text-2xl flex gap-2">
        {pr.technologies.map((tech) => {
          return (
            <span
              key={tech}
              className="relative"
              onMouseEnter={() => handleMouseEnter(tech)}
              onMouseLeave={handleMouseLeave}
            >
              {techs[tech]}
              {tooltip === tech && (
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm rounded-md">
                  {tech}
                </span>
              )}
            </span>
          );
        })}
      </p>
      <p className="py-4  flex justify-center">
        <img src={pr.image} className="w-600 h-400 rounded-full" />
      </p>
    </project-card>
  );
};

export default ProjectCard;

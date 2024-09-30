import { useState } from "react";
import { FaPython, FaReact, FaYoutube } from "react-icons/fa";
import { FaRaspberryPi } from "react-icons/fa6";
import {
  SiFastapi,
  SiPostgresql,
  SiVite,
  SiDjango,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

const techs = {
  python: <FaPython />,
  django: <SiDjango />,
  fastapi: <SiFastapi />,
  postgresql: <SiPostgresql />,
  react: <FaReact />,
  vite: <SiVite />,
  tailwindcss: <SiTailwindcss />,
  ccpp: "C/C++",
  raspberrypi: <FaRaspberryPi />,
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
      <p className="py-4 text-2xl flex gap-2">
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
                <span className="absolute bg-gray-500 bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm rounded-md">
                  {tech}
                </span>
              )}
            </span>
          );
        })}
      </p>
      <h2 className="py-4 indent-8 text-lg">
        {pr.youtube && (
          <p className="py-4  text-lg ">
            <a
              href={pr.youtube}
              className="hover:cursor-pointer hover:underline hover:text-gray-400 flex items-center"
            >
              <FaYoutube />
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
        {pr.github && (
          <p className="py-4 text-lg">
            <a
              href={pr.github}
              className="hover:cursor-pointer hover:underline hover:text-gray-400 flex items-center"
            >
              <SiGithub /> GitHub
            </a>
          </p>
        )}
      </h2>

      {pr.image && (
        <a href={pr.website} rel="noreferrer" target="_blank">
          <p className="py-4  flex justify-center">
            <img
              src={pr.image}
              alt={pr.alt}
              className="w-600 h-400 rounded-full"
            />
          </p>
        </a>
      )}
      <p className="py-4 indent-8 text-lg">{pr.description}</p>
    </project-card>
  );
};

export default ProjectCard;

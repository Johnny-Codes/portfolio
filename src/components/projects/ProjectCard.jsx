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
  SiAlpinedotjs,
} from "react-icons/si";
import { FaDigitalOcean, FaDocker, FaCcStripe } from "react-icons/fa";
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
  htmx: "HTMX",
  stripe: <FaCcStripe />,
  docker: <FaDocker />,
  digitalocean: <FaDigitalOcean />,
  alpinejs: <SiAlpinedotjs />,
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
                <span className="absolute bg-professional-grey bottom-full left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm rounded-md border border-professional-midgrey">
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
              className="hover:cursor-pointer hover:underline hover:text-professional-silver flex items-center"
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
              className="hover:cursor-pointer hover:underline hover:text-professional-silver"
            >
              Visit Live
            </a>
          </p>
        )}
        {pr.github && (
          <p className="py-4 text-lg">
            <a
              href={pr.github}
              className="hover:cursor-pointer hover:underline hover:text-professional-silver flex items-center"
            >
              <SiGithub /> GitHub
            </a>
          </p>
        )}
      </h2>

      {pr.image && (
        <a href={pr.website} rel="noreferrer" target="_blank">
          <p className="py-4 flex justify-center">
            <img
              src={pr.image}
              alt={pr.alt}
              className="max-w-md w-full h-auto rounded-lg shadow-lg hover:shadow-professional-yellow/20 transition-shadow border border-professional-midgrey"
            />
          </p>
        </a>
      )}
      <p className="py-4 indent-8 text-lg">{pr.description}</p>
    </project-card>
  );
};

export default ProjectCard;

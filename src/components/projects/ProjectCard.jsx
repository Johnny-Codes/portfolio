const ProjectCard = (props) => {
  return (
    <project-card>
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <img src={props.image} className="project-hero" />
    </project-card>
  );
};

export default ProjectCard;

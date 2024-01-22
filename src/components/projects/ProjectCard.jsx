const ProjectCard = (props) => {
  return (
    <project-card>
      <h3>{props.title}</h3>
      <img src={props.image} />
      <p>{props.description}</p>
    </project-card>
  );
};

export default ProjectCard;

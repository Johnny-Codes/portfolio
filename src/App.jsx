import "./App.css";
import NavBar from "./components/nav/NavBar";
import ContactForm from "./components/contact/ContactForm";
import ProjectCard from "./components/projects/ProjectCard";
import projects from "./components/projects/ProjectInfo";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <content-container>
          <h1>Hello my name is Paul Johns</h1>
          <h3>Secret Clearance | Software Engineer | US Citizen</h3>
          <h2 id="about-me">I'm a full stack engineer</h2>
          <p>I like to make stuff.</p>
          <p>
            Currently looking for Software Engineering jobs in Huntsville,
            Alabama or Houston, Texas
          </p>
          <p>Currently hold a Secret clearance</p>
          <h2 id="projects">Projects</h2>
          <h3>
            Visit my{" "}
            <a href="https://www.youtube.com/@johnny-codes" target="_blank">
              YouTube
            </a>{" "}
            channel to see all content
          </h3>
          <project-container>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </project-container>
          <h2 id="contact-me">Contact Me!</h2>
          <contact-container>
            <ContactForm />
            <div>
              <h3>...or find me on Online</h3>
              <p>Here are some of my social media profiles</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/pmjohns/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://www.github.com/johnny-codes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </contact-container>
        </content-container>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import NavBar from "./components/nav/NavBar";
import ContactForm from "./components/contact/ContactForm";
import ProjectCard from "./components/projects/ProjectCard";

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
            <ProjectCard
              title="project one"
              image="https://placehold.co/600x400"
              description="description 1"
            />
            <ProjectCard
              title="project two"
              image="https://placehold.co/600x400"
              description="description 2"
            />
          </project-container>
          <h2 id="contact-me">Contact Me!</h2>
          <ContactForm />
        </content-container>
      </div>
    </>
  );
}

export default App;

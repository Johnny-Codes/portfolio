import "./App.css";
import NavBar from "./components/nav/NavBar";
import ContactForm from "./components/contact/ContactForm";
import ProjectComponent from "./components/projects/ProjectComponent";
import AboutMe from "./components/about/AboutMe";

import { SiGithub, SiLinkedin } from "react-icons/si";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div></div>
        <content-container>
          <AboutMe />
          <h2 id="projects">Projects</h2>
          <h3>
            Visit my{" "}
            <a
              href="https://www.youtube.com/@johnny-codes"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>{" "}
            channel to see all content
          </h3>
          <project-container>
            <ProjectComponent />
          </project-container>
          <h2 id="contact-me">Contact Me!</h2>
          <contact-container>
            <ContactForm />
            <div>
              <h3>...or find me on...</h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/pmjohns/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin /> LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://www.github.com/johnny-codes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub /> GitHub
                </a>
              </p>
            </div>
          </contact-container>
        </content-container>
        <div></div>
      </div>
    </>
  );
}

export default App;

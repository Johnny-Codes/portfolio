import "./App.css";
import NavBar from "./components/nav/NavBar";
import ContactForm from "./components/contact/ContactForm";
import ProjectComponent from "./components/projects/ProjectComponent";
import AboutMe from "./components/about/AboutMe";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="bg-gray-900 text-white">
      <NavBar />
      <div className="max-w-screen-lg mx-auto p-4">
        <content-container>
          <AboutMe />
          <project-container>
            <h2 id="projects" className="text-3xl text-center underline mt-4">
              Projects
            </h2>
            <ProjectComponent />
            <p className="m-4 text-lg">
              Visit my{" "}
              <a
                href="https://www.youtube.com/@johnny-codes"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer hover:underline hover:text-gray-400"
              >
                YouTube
              </a>{" "}
              channel
            </p>
          </project-container>

            <ContactForm />
        </content-container>
      </div>
            <Footer />
    </div>
  );
}

export default App;

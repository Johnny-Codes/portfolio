import "./App.css";
import NavBar from "./components/nav/NavBar";
import ContactForm from "./components/contact/ContactForm";
import ProjectComponent from "./components/projects/ProjectComponent";
import AboutMe from "./components/about/AboutMe";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="bg-black text-professional-offwhite relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large Circle - Top Right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-4 border-professional-yellow opacity-10"></div>
        
        {/* Medium Circle - Bottom Left */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-professional-darkyellow opacity-5"></div>
        
        {/* Triangle Shape - Top Left */}
        <div className="absolute top-1/4 left-10 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[173px] border-b-professional-yellow opacity-5 rotate-12"></div>
        
        {/* Small Circle - Middle Right */}
        <div className="absolute top-1/2 right-20 w-32 h-32 rounded-full border-2 border-professional-yellow opacity-15"></div>
        
        {/* Rectangle - Bottom Right */}
        <div className="absolute bottom-1/4 right-1/3 w-48 h-24 bg-professional-yellow opacity-5 rotate-45"></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-1/3 left-1/4 w-1 h-64 bg-professional-yellow opacity-10 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-48 bg-professional-yellow opacity-10 -rotate-45"></div>
        
        {/* Small Circles Pattern - Center */}
        <div className="absolute top-2/3 left-1/2 w-12 h-12 rounded-full border-2 border-professional-yellow opacity-20"></div>
        <div className="absolute top-2/3 left-1/2 translate-x-16 w-8 h-8 rounded-full bg-professional-yellow opacity-10"></div>
      </div>
      
      <div className="relative z-10">
        <NavBar />
      <div className="max-w-screen-lg mx-auto p-4">
        <content-container>
          <AboutMe />
          <project-container>
            <h2 id="projects" className="text-3xl text-center underline decoration-professional-yellow mt-4">
              Portfolio & Client Work
            </h2>
            <p className="text-center text-professional-silver mt-2 mb-4 text-lg">
              Website Design, AI Automation & Development Projects for Alabama Businesses
            </p>
            <ProjectComponent />
            <p className="m-4 text-lg">
              Visit my{" "}
              <a
                href="https://www.youtube.com/@johnny-codes"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer hover:underline hover:text-professional-silver"
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
    </div>
  );
}

export default App;

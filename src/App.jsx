import { useState } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <>
      <div className="nav-bar">
        <NavBar />
      </div>
      <h1>Hello my name is Paul Johns</h1>
      <h3>Secret Clearance | Software Engineer | US Citizen</h3>
      <h2 id="about-me">I'm a full stack engineer</h2>
      <p>I like to make stuff.</p>
      <p>
        Currently looking for Software Engineering jobs in Huntsville, Alabama
        or Houston, Texas
      </p>
      <p>Currently hold a Secret clearance</p>
      <h2 id="projects">YouTube Highlights.</h2>
      <h3>
        Visit my{" "}
        <a href="https://www.youtube.com/@johnny-codes" target="_blank">
          YouTube
        </a>{" "}
        channel to see all content
      </h3>
      <p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LPdrhc8dlYA?si=XofSaELlqFKMujgT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </p>
      <p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/id8PYhitDwk?si=t7kpOf874neSVg23"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </p>
      <h2 id="contact-me">Contact Me!</h2>
    </>
  );
}

export default App;

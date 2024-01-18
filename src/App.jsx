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
      <h2 className="about-me">I'm a full stack engineer</h2>
      <p>I like to make stuff.</p>
      <h2>YouTube Highlights.</h2>
      <h3>
        Visit my{" "}
        <a href="https://www.youtube.com/@johnny-codes" target="_blank">
          YouTube
        </a>{" "}
        channel to see all content
      </h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LPdrhc8dlYA?si=XofSaELlqFKMujgT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default App;

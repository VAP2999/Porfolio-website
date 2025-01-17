import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-item">
        <h3>Portfolio Website</h3>
        <p>A responsive React-based portfolio showcasing my skills and projects.</p>
        <a href="https://github.com/vanshi-portfolio" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
      </div>
      <div className="project-item">
        <h3>Weather App</h3>
        <p>Built a weather forecasting app using React and OpenWeather API.</p>
        <a href="https://github.com/vanshi-weatherapp" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;

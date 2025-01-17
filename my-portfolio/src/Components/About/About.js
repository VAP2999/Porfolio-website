import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Hello 👋, I'm Vanshi Patel, a dedicated software engineer and a graduate student @Northeastern University.
        Throughout my career, I've shown a strong commitment to innovation and problem-solving.
        In my free time, I enjoy gym workouts, photography, hiking, and cooking.
      </p>
      <div className="about-buttons">
        <a href="#contact" className="btn">Contact Me</a>
        <a href="/path-to-resume.pdf" className="btn">Download Resume</a>
      </div>
    </section>
  );
};

export default About;

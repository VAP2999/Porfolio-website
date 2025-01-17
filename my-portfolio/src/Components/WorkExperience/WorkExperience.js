import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <h3>Software Engineer Intern</h3>
        <p><strong>ABC Company</strong> — Jan 2023 to Aug 2023</p>
        <ul>
          <li>Developed and maintained scalable web applications using React and Node.js.</li>
          <li>Optimized APIs for performance, reducing response time by 20%.</li>
          <li>Collaborated with cross-functional teams to design new features.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Junior Developer</h3>
        <p><strong>XYZ Tech</strong> — Jun 2022 to Dec 2022</p>
        <ul>
          <li>Created user-friendly UI components using React.</li>
          <li>Improved application performance through effective debugging and code refactoring.</li>
          <li>Integrated third-party APIs to enhance functionality.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;

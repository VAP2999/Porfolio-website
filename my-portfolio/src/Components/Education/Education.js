import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>Northeastern University</h3>
        <p><strong>Master's in Software Engineering</strong> — Sep 2024 to 2026</p>
        <p>Relevant Coursework: Data Structures, Algorithms, Web Development, Software Design Patterns.</p>
      </div>
      <div className="education-item">
        <h3>Gujarat Technological University</h3>
        <p><strong>Bachelor's in Computer Science</strong> — Sep 2020 to Jun 2024</p>
        <p>Relevant Coursework: Machine Learning, Database Management, Operating Systems.</p>
      </div>
    </section>
  );
};

export default Education;

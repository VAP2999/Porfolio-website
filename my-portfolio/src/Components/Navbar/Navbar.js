// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Toggle dark/light mode
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     const app = document.querySelector(".app");
//     if (!isDarkMode) {
//       app.classList.add("dark");
//       app.classList.remove("light");
//     } else {
//       app.classList.add("light");
//       app.classList.remove("dark");
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <a href="/">Vanshi Patel</a>
//       </div>
//       <div className="navbar-links">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#education">Education</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>
//       <button className="theme-toggle" onClick={toggleTheme}>
//         {isDarkMode ? "🌙" : "🌞"}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, darkTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* GIF Section */}
        <div className="gif-container">
          <img
            src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"
            alt="Coding GIF"
            className="coding-gif"
          />
        </div>

        {/* Name Section */}
        <h1 className="logo">hetpatel.dev</h1>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#work-experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkTheme ? '🌙' : '🌞'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

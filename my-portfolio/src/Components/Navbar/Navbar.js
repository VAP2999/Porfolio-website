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
        <h1 className="logo">vanshipatel.dev</h1>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#work-experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Rotating Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/vanshi-patel-2k2/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            style={{ '--index': 0 }} // LinkedIn first
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/VAP2999"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            style={{ '--index': 1 }} // GitHub second
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:patel.vanshi@northeastern.edu"
            className="icon"
            style={{ '--index': 2 }} // Mail third
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkTheme ? '🌙' : '🌞'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

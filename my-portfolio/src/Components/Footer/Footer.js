import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://linkedin.com/in/vanshi-patel" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/vanshi-patel" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto:vanshi.patel@example.com">
        <i className="fas fa-envelope"></i>
      </a>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>Email: <a href="mailto:patel.vanshi@northeastern.edu">patel.vanshi@northeastern.edu</a></p>
      <p>Phone: +1(857)308 6059</p>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        style={{ width: "100%", height: "300px", border: "none" }}
      ></iframe>
    </section>
  );
};

export default Contact;

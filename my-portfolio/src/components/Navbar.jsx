import React from "react";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">IN.</div>
      <div className="nav-links">
        <a href="#works">WORKS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;

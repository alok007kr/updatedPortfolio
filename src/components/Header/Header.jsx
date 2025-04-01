import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="head-container">
      {/* Logo */}
      <div className="logo">
        <h2 className="logo-name ml-3 text-4xl font-bold text-center text-gray-500">
          Alok
        </h2>
        <p className="circle"></p>
      </div>

      {/* Navigation Links */}
      <div className={`nav-link font-medium ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/#about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#skills" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/#experience" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <a href="https://github.com/alok007kr" onClick={closeMenu}>
              Github
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </div>
    </div>
  );
};

export default Header;

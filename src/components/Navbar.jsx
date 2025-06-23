import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Accendra Ventures Logo" className="logo-img" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`nav-pill ${menuOpen ? 'show' : ''}`} >
        <ul className="nav-links">
          <li className="active" onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('services')}>Services</li>
          <li onClick={() => scrollToSection('about')}>About Us</li>
          <li onClick={() => scrollToSection('contact')}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

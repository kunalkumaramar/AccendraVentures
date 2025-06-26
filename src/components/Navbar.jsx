import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollOrNavigate = (id) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll after short delay
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to allow the page to render
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleServicesClick = () => {
    navigate('/services');
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Accendra Ventures Logo" className="logo-img" />
      </div>

      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-pill ${menuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li className="active" onClick={() => scrollOrNavigate('home')}>Home</li>
          <li onClick={handleServicesClick}>Services</li>
          <li onClick={() => scrollOrNavigate('about')}>About Us</li>
          <li onClick={() => scrollOrNavigate('contact')}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

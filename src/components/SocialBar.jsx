import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/SocialBar.css";

const SocialBar = () => {
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/accendra-ventures-93b528371/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/accendraventures?igsh=ODRjenBlZmp0dDBw', '_blank');
  };

  const handleGmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&to=chirag.jangra@accendraventures.com&su=Hello&body=Hi%20Chirag","_blank");
  };

  return (
    <div className="social-bar">
      <div className="social-icon" onClick={handleLinkedinClick}><FaLinkedin /></div>
      <div className="social-icon" onClick={handleInstagramClick}><FaInstagram /></div>
      <div className="social-icon" onClick={handleGmailClick}><SiGmail /></div>
    </div>
  );
};

export default SocialBar;

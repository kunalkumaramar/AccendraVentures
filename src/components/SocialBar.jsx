import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/SocialBar.css";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <div className="social-icon"><FaLinkedin /></div>
      <div className="social-icon"><FaInstagram /></div>
      <div className="social-icon"><FaYoutube /></div>
      <div className="social-icon"><SiGmail /></div>
    </div>
  );
};

export default SocialBar;

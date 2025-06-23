import React from "react";
import m2 from "../assets/m2.png";
import "../styles/ContactUs.css"; // Import styles

const ContactUs = () => {
  return (
    <div id= "contact" className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-image">
          <img src={m2} alt="Contact Accendra Ventures" />
        </div>
        <div className="contact-form">
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Submit</button>
        </div>
      </div>
      <footer className="footer">
        <p className="Head">© 2025 Accendra Ventures. All rights reserved</p>
        <p className="Disclamer">Accendra Ventures is a professional recruitment and consulting firm dedicated to connecting top talent with leading organizations. All information provided on this website is for general informational purposes only and is not intended as legal, financial, or professional advice. Accendra Ventures makes no guarantees regarding the outcomes of recruitment or consulting services, as hiring decisions and job market conditions may vary. While we strive to maintain accurate and up-to-date content, we are not liable for any errors, omissions, or changes in information. Use of this website and our services constitutes acceptance of our terms and privacy policies.</p>
      </footer>
    </div>
  );
};

export default ContactUs;

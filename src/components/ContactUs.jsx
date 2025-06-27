import React, { useRef, useState } from "react";
import m2 from "../assets/m2.png";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const formRef = useRef(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbyFi2JTgzDvajcWc7nFbx3O1PciK0PtD1GJiY7aDa8ifBNZxEZ9Y42FOMe2aZMoq64Q/exec"; // ✅ Use correct Web App URL from deployment
    const formData = new FormData(formRef.current);

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setMsg("Message sent successfully!");
          formRef.current.reset();
        } else {
          setMsg("Failed to send message. Please try again.");
        }
        setTimeout(() => setMsg(""), 5000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMsg("Message failed to send.");
      });
  };

  return (
    <div id="contact" className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-image">
          <img src={m2} alt="Contact Accendra Ventures" />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea name="Message" placeholder="Your Message" rows="6" required />
          <button type="submit">Submit</button>
          <span id="msg">{msg}</span>
        </form>
      </div>

      <footer className="footer">
        <p className="Head">© 2025 Accendra Ventures. All rights reserved</p>
        <p className="Disclamer">
          Accendra Ventures is a professional recruitment and consulting firm
          dedicated to connecting top talent with leading organizations. All
          information provided on this website is for general informational
          purposes only and is not intended as legal, financial, or professional
          advice. Use of this website and our services constitutes acceptance of
          our terms and privacy policies.
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;

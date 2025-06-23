import React from "react";
import m1 from "../assets/m1.png";
import "../styles/KnowMore.css"; // New stylesheet

const KnowMore = () => {
  return (
    <div className="know-more-page">
      <h1>Know More About Us</h1>
      <h2>Accendra Ventures</h2>
      <div className="know-more-content">
        <div className="know-more-image">
          <img src={m1} alt="About Accendra Ventures" />
        </div>
        <div className="know-more-text">
          <p>
            At Accendra Ventures, we are dedicated to connecting India's top talent with leading companies across diverse industries. As a premier recruitment consultancy, we understand the unique dynamics of the Indian job market and the importance of finding the right fit for both employers and job seekers.
          </p>
          <p>
            Whether you’re a business looking to build a high-performing team or a professional seeking your next career opportunity, we’re here to support your success. Our expert recruiters leverage deep industry knowledge, an extensive network, and a personalized approach to deliver exceptional recruitment solutions that align with your goals.
          </p>
          <p>
            Explore how we can help you achieve your aspirations, and experience recruitment with a partner who truly understands the Indian market.
          </p>
          <p>
            We provide specialized recruitment services tailored to specific industries, such as IT, finance, healthcare, and manufacturing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;

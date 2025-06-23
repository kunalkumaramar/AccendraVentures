import React from 'react';
import '../styles/AboutUs.css';
import about from '../assets/about.png';
import partner1 from '../assets/p1.png';
import partner2 from '../assets/p2.png';

const AboutUs = () => {
  const logos = [partner1, partner2, partner1, partner2]; // Repeated for scroll effect

  return (
    <section id="about" className="about-section">
      <h3 className="about-title">About Us</h3>
      <div className="about-content">
        <div className="text-content">
          <h4 className="section-heading">Our Mission:</h4>
          <p>
            Our mission is to empower businesses by connecting them with exceptional talent and to help individuals achieve their career aspirations. We are committed to delivering tailored recruitment solutions that align with our clients' unique needs, fostering long-term success for both employers and job seekers. Through integrity, innovation, and a deep understanding of the market, we strive to be a trusted partner in the journey of growth and opportunity.
          </p>

          <h4 className="section-heading">Our Story:</h4>
          <p>
            We are a team of fully motivated, ex-corporate experts from top domestic companies and multinational corporations (MNCs), specializing in talent acquisition. Having worked at the forefront of recruitment in these leading organizations, we’ve encountered and navigated numerous challenges in finding the right talent. These experiences have given us a deep understanding of the frustrations and inefficiencies that can arise during the recruitment process.
          </p>
          <p>
            Driven by our collective passion to improve the hiring experience, we founded <span className="highlight">Accendra Ventures</span> to offer a better solution. Our expertise, gained from years of working in high-stakes environments, allows us to provide tailored recruitment services that address the unique needs of businesses and job seekers alike. We are committed to making the recruitment process more efficient, effective, and rewarding for everyone involved.
          </p>
        </div>
        <div className="image-wrapper">
          <img src={about} alt="Founder" className="about-image" />
        </div>
      </div>

      {/* Empanelled Partners Section */}
      <div className="partners-section">
        <h3 className="partners-title">
          Our <span className="highlight">Empanelled Partners</span>
        </h3>
        <div className="scrolling-partners">
          <div className="partners-track">
            {[partner1, partner2, partner1, partner2, partner1, partner2, partner1,
              partner1, partner2, partner1, partner2, partner1, partner2, partner1
            ].map((logo, index) => (
              <div key={index} className="partner-logo" style={{ '--i': index }}>
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

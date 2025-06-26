import React from 'react';
import '../styles/Services.css';
import logo from '../assets/logo.png'; // use your AV logo path
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const handleServicesClick = () => {
    navigate('/services');
  };
  return (
    <section id='services' className="services-section">
      <h3><span className="highlight">Services</span> <span className="bold-text">We Provide</span></h3>
      <div className="services-grid">
        <div className="service-card">
          <img src={logo} alt="logo" className="card-logo" />
          <h4 className="service-title">Key Services</h4>
          <p className="service-desc">
            Our key services are designed to meet all your hiring needs — from permanent staffing to executive search and complete HR outsourcing
          </p>
          <a onClick={handleServicesClick} className="learn-more">Learn More</a>
        </div>

        <div className="service-card">
          <img src={logo} alt="logo" className="card-logo" />
          <h4 className="service-title">Shared Services</h4>
          <p className="service-desc">
            Streamlining HR operations with expert support across audits, onboarding, employee lifecycle, and more.
          </p>
          <a onClick={handleServicesClick} className="learn-more">Learn More</a>
        </div>

        <div className="service-card">
          <img src={logo} alt="logo" className="card-logo" />
          <h4 className="service-title">Upcoming Services</h4>
          <p className="service-desc">
            Expanding our offerings with cutting-edge solutions in payroll, IT, cybersecurity, and compliance to power your growth.
          </p>
          <a onClick={handleServicesClick} className="learn-more">Learn More</a>
        </div>
      </div>

      <button className="see-more-btn" onClick={handleServicesClick}>See More</button>
    </section>
  );
};

export default Services;

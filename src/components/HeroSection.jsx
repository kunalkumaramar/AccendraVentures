import React, { useEffect } from 'react';
import '../styles/HeroSection.css';
import heroImg from '../assets/heroimg.png'; // the image with labels embedded
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    gsap.from('.hero-left h3, .hero-left h1, .hero-left p, .hero-buttons', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top center',
      },
    });

    gsap.fromTo(
      '.profile-container img',
      { scale: 0.9, y: -20, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top center',
        },
      }
    );

    gsap.to('.profile-container img', {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: 'sine.inOut',
    });

    gsap.to('.scroll-track', {
      x: "-50%",
      duration: 25,
      ease: "linear",
      repeat: -1,
    });
  }, []);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919606906215', '_blank');
  };

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-left">
            <h3>Hello!</h3>
            <h1>
              <span className="highlight3">We are</span>{' '}
              <span className="highlight">ACCENDRA VENTURES</span>
            </h1>
            <p className="tagline">The Ultimate Hub for Hiring Needs</p>
            <p>Empowering businesses with top-tier professionals and innovative solutions.</p>
            <div className="hero-buttons">
              <button className="about-btn" onClick={() => scrollToSection('about')}>About Us</button>
              <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                <FaWhatsapp /> WhatsApp
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-container">
              <img src={heroImg} alt="Founder" />
            </div>
          </div>
        </div>
      </section>

      <div className="scrolling-categories">
        <div className="scroll-track">
          {['Permanent Staffing', 'Leadership Hiring', 'Temporary & Contract Staffing', 'Executive Hiring', 'Outsourcing Services','HR Audit','HR Operations','Employee Life Cycle','Onboarding','HR Interviews/Discussions','Payroll','IT Infrastructure Services','Cybersecurity','Digital Application Services','Statutory & Compliance Services']
            .flatMap(item => [item]) // repeats items for longer scroll
            .map((item, index) => (
              <div className="category-item" key={index}>
                {item} <span className="category-icon">✦</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

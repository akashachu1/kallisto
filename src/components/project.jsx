import React, { useState } from 'react';
import './project.css';
import logo from "../assets/LOGO.png";
import thankyou from "../assets/projlast.png";

const Project = ({ onHome, formData, onBeta, onMaterials }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userName = formData?.fullName || 'Partner';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="kallisto-container">
      {/* HEADER / NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Kallisto" className="main-logo" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); onHome(); setIsMenuOpen(false); }}>Home</a></li>
          <li><a href="#beta" onClick={(e) => { e.preventDefault(); onBeta(); setIsMenuOpen(false); }}>Beta</a></li>
          <li><a href="#materials" onClick={(e) => { e.preventDefault(); onMaterials(); setIsMenuOpen(false); }}>Materials</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
          <li><a href="#career" onClick={() => setIsMenuOpen(false)}>Career</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* THANK YOU SECTION */}
      <section className="project-section">
        <div className="project-content">
          <div className="project-header">
            <span className="subtitle">Service Provider</span>
            <h1 className="project-title">Thank you, {userName}</h1>
            <p className="project-description">
              Thanks for showing Interest in Joining Kallisto’s Beta Program
            </p>
          </div>

          <div className="thank-you-image-container">
            <img src={thankyou} alt="Thank You" className="thank-you-image" />
          </div>

          <div className="project-cta-area">
            <h2 className="contact-notice">Our team will soon contact you.</h2>
            <button className="back-btn" onClick={onHome}>Back to home</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Materials</h3>
            <ul>
              <li>Cement</li>
              <li>Steel</li>
              <li>Aggregates</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Career</h3>
            <ul>
              <li>Founding Team</li>
              <li>Tech Team</li>
              <li>Architecture Team</li>
              <li>More</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Get in touch</h3>
            <p className="get-in-touch-text">You’ll find your next project, from anywhere. <span>Try us!</span></p>
            <div className="social-icons">
               <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
               <a href="https://www.linkedin.com/company/kallisto-innovations-pvt-ltd/" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="https://www.instagram.com/kallistoinnovations?igsh=MXQzemJrNGYycjg4Ng==" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo" onClick={onHome} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Kallisto" className="footer-logo-img" />
          </div>
          <p className="copyright">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Project;

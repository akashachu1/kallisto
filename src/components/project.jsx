import React from 'react';
import './project.css';
import logo from "../assets/LOGO.png";
import thankyou from "../assets/projlast.png";

const Project = ({ onHome, formData, onBeta, onMaterials }) => {
  const userName = formData?.fullName || 'Partner';

  return (
    <div className="kallisto-container">
      {/* HEADER / NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Kallisto" className="main-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); onHome(); }}>Home</a></li>
          <li><a href="#beta" onClick={(e) => { e.preventDefault(); onBeta(); }}>Beta</a></li>
          <li><a href="#materials" onClick={(e) => { e.preventDefault(); onMaterials(); }}>Materials</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-text">Sign up</button>
          <button className="btn-black">Register</button>
        </div>
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
               <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
               <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
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

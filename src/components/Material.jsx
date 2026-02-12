import React, { useState } from 'react';
import './Material.css';
import logo from "../assets/LOGO.png";
import ball from "../assets/second.png";
import shadow from "../assets/third.png";
import breaki from "../assets/mix.png";

const Material = ({ onHome, onJoinBeta, onMaterials, onBeta }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="material-container">
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

      {/* HERO SECTION */}
      <section className="material-hero">
        <div className="material-watermark">K▲llisto</div>
        <div className="material-hero-content">
          <div className="material-hero-text">
            <span className="welcome-tag">Delivered & Coordinated via WhatsApp</span>
            <h1 className="material-title">Materials</h1>
            <p className="material-desc">
              Browse verified Construction materials, get transparent pricing and order<br></br> fulfilment support directly through WhatsApp.
            </p>
            <button className="order-now-btn" onClick={onJoinBeta}>Order Now</button>
            <p className="material-note">Material ordering is currently limited to onboarded service providers as part of the beta program.</p>
          </div>
          <div className="material-hero-visual">
           <img src={breaki} alt="Onboarding" className="onboarding-img" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-section">
        <div className="why-choose-header">
           <h2 className="why-title">Why Choose Us</h2>
           <p className="why-subtitle">Trusted Material Coordination</p>
        </div>
        
        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon">
              {/* Placeholder for Verified Suppliers Icon */}
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17" cy="7" r="3" stroke="#A855F7" strokeWidth="2"/>
                <path d="M17 11L17 13" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Verified material suppliers</h3>
            <p>Find new customers and build your email list with lead generation ..</p>
          </div>

          <div className="why-item">
            <div className="why-icon">
              {/* Placeholder for Transparent Pricing Icon */}
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9L13 14L10 11L7 14" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Transparent pricing</h3>
            <p>Market your ecommerce business and deliver experiences ..</p>
          </div>

          <div className="why-item">
            <div className="why-icon">
              {/* Placeholder for Delivery Support Icon */}
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#A855F7" strokeWidth="2"/>
                <path d="M3 10H21" stroke="#A855F7" strokeWidth="2"/>
                <path d="M7 15H7.01" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 15H11.01" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Delivery support</h3>
            <p>Build a following, engage them with your content ..</p>
          </div>
        </div>
      </section>

      {/* ONBOARDING SECTION */}
      <section className="material-onboarding">
        <div className="material-onboarding-content">
          <div className="material-onboarding-visual">
               <img src={ball} alt="Onboarding" className="onboarding-img" />
               <img src={shadow} alt="Shadow" className="onboarding-shadow" />
          </div>
          <div className="material-onboarding-text">
            <h2>Onboarding is intentionally limited and based on review and verification.</h2>
            <p>This is not mass enrolment. It’s early partnership before scale.</p>
            <button className="join-beta-btn" onClick={onJoinBeta}>Join Beta Testing</button>
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
          <div className="footer-logo">
            <img src={logo} alt="Kallisto" className="footer-logo-img" />
          </div>
          <p className="copyright">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Material;

import React, { useState } from 'react';
import './Home.css';
import logo from "../assets/LOGO.png";
import hero from "../assets/first.png";
import ball from "../assets/second.png";
import shadow from "../assets/third.png";

const Home = ({ onBeta, onMaterials }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#beta" onClick={(e) => { e.preventDefault(); onBeta(); setIsMenuOpen(false); }}>Beta</a></li>
          <li><a href="#materials" onClick={(e) => { e.preventDefault(); onMaterials(); setIsMenuOpen(false); }}>Materials</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
          <li><a href="#career" onClick={() => setIsMenuOpen(false)}>Career</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-text">Sign up</button>
          <button className="btn-black">Register</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="watermark">Kallisto</div>

        <div className="hero-content">
          <div className="hero-text-area">
            <span className="welcome-text">Welcome to</span>
            <h1 className="hero-title">
              Kallisto Service Provider <br /> 
              <span className="highlight">Beta Program</span>
            </h1>
            <p className="hero-description">
              A limited onboarding program for selected construction service providers 
              to test a new way of getting consistent, quality projects without marketing spend.
            </p>
            <button className="cta-btn" onClick={onBeta}>Apply for Beta Access</button>
          </div>

          <div className="hero-image-area">
            <img src={hero} alt="Kallisto Hero" className="hero-main-img" />
          </div>
        </div>
      </section>

      {/* ONBOARDING SECTION */}
      <section className="onboarding-section">
        <div className="onboarding-content">
          <div className="onboarding-visual">
            <img src={ball} alt="Sphere" className="onboarding-ball" />
            <img src={shadow} alt="Small Sphere" className="onboarding-black-ball" />
          </div>
          <div className="onboarding-text">
            <h2>Onboarding is intentionally limited and based on review and verification.</h2>
            <p>This is not mass enrolment. It’s early partnership before scale.</p>
            <button className="cta-btn" onClick={onBeta}>Join Beta Testing</button>
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
            <p>You’ll find your next project, from anywhere. Try us!</p>
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

export default Home;

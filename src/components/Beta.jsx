import React from 'react';
import './Beta.css';
import logo from "../assets/LOGO.png";
import jack from "../assets/manh.png";    
import wall from "../assets/wall.png";
import ham from "../assets/harmer.png";
import mat from "../assets/diggsoil.png";
import dig from "../assets/struct.png";
import ball from "../assets/second.png";
import shadow from "../assets/third.png";

const Beta = ({ onHome, onJoinBeta, onBeta, onMaterials }) => {
  return (
    <div className="kallisto-container">
      {/* HEADER / NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Kallisto" className="main-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); onHome(); }}>Home</a></li>
          <li><a href="#beta" onClick={(e) => { e.preventDefault(); onJoinBeta(); }}>Beta</a></li>
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

      {/* HERO SECTION */}
      <section className="beta-hero">
        <div className="beta-watermark">Kallisto</div>
        <div className="beta-hero-content">
          <div className="beta-hero-text">
            <span className="welcome-tag">Welcome to</span>
            <h1 className="beta-title">Beta Program</h1>
            <p className="beta-desc">
              Beta participants get early access to a structured <strong>digital workflow</strong>, 
              <strong> material coordination support</strong>, and <strong>verified project requirements</strong>, 
              while helping refine the system through real projects.
            </p>
            <p className="beta-note">This is not mass enrolment. It’s early partnership before scale.</p>
            <button className="beta-apply-btn" onClick={onJoinBeta}>Apply for Beta Access</button>
          </div>
          <div className="beta-hero-visual">
              <img src={jack} alt="" />
          </div>
        </div>
      </section>

      {/* YOU OWN SECTION */}
      <section className="you-own-section">
        <div className="you-own-content">
          <div className="you-own-text">
            <h2 className="section-title">You Own!</h2>
            <p className="section-subtitle">
              These features are being rolled out in a controlled beta environment 
              and are available only to selected service providers.
            </p>
          </div>
          
          <div className="feature-cards-right">
            <div className="feature-card purple-card">
              <div className="feature-img-wrapper column-img">
                <img src={wall} alt="Virtual Office" />
              </div>
              <div className="feature-text">
                <h3>Virtual Office</h3>
                <p>A structured digital workspace for selected service providers during the Kallisto beta program.</p>
              </div>
            </div>
            <div className="feature-card outline-card">
              <div className="feature-text">
                <h3>Virtual Team</h3>
                <p>Built to help you manage projects, teams, and clients without setting up a physical office.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS SECTION */}
      <section className="early-access-section">
        <h2 className="early-title">Early access</h2>
        <p className="early-subtitle">
          Early Access is a limited beta program for selected service providers 
          to experience Kallisto before the public launch.
        </p>

        <div className="early-grid">
          <div className="early-item">
            <div className="early-visual">
              <img src={ham} alt="Site support" className="early-img hammer-img" />
            </div>
            <div className="early-text-box">
              <h3>Site support</h3>
              <p>A structured digital workspace for selected service providers during the Kallisto beta program.</p>
            </div>
          </div>
          <div className="early-item">
            <div className="early-visual">
              <img src={mat} alt="Material Support" className="early-img material-img" />
            </div>
            <div className="early-text-box">
              <h3>Material Support</h3>
              <p>Access to verified material supply during the beta phase to simplify execution.</p>
            </div>
          </div>
          <div className="early-item">
            <div className="early-visual">
              <img src={dig} alt="Structure Workflow" className="early-img workflow-img" />
            </div>
            <div className="early-text-box">
              <h3>Structure Workflow</h3>
              <p>Clear scope, expectations, and coordination designed to reduce friction on site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM ONBOARDING */}
      <section className="beta-onboarding">
        <div className="beta-onboarding-content">
          <div className="beta-onboarding-visual">
               <img src={ball} alt="Onboarding" className="onboarding-img" />
               <img src={shadow} alt="Shadow" className="onboarding-shadow" />
          </div>
          <div className="beta-onboarding-text">
            <h2>Onboarding is intentionally limited and based on review and verification.</h2>
            <p>This is not mass enrolment. It’s early partnership before scale.</p>
            <button className="beta-join-btn" onClick={onJoinBeta}>Join Beta Testing</button>
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

export default Beta;

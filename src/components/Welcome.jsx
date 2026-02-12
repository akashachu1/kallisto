import React, { useState } from 'react';
import './Welcome.css';
import logo from "../assets/LOGO.png";

const Welcome = ({ onNext, onHome, formData, updateFormData, onBeta, onMaterials }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    updateFormData({ [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Welcome Data saved:', formData);
    if (onNext) onNext();
  };
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

      {/* FORM SECTION */}
      <section className="welcome-section">
        <div className="watermark">Kallisto</div>

        <div className="welcome-content">
          <div className="welcome-header">
            <span className="subtitle">Service Provider</span>
            <h1 className="welcome-title">Welcome Partner</h1>
            <p className="welcome-description">
              Fill in the form to request access to the beta programme.<br />
              Our team will review your details and contact you if you're shortlisted.
            </p>
          </div>

          <form className="partner-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Enter your Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                placeholder="Name" 
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessName">Enter Business Name (If any)</label>
              <input 
                type="text" 
                id="businessName" 
                placeholder="Business Title" 
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Contact Address</label>
              <textarea 
                id="address" 
                placeholder="Area, Landmark, City" 
                rows="4"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="pincode">Pincode</label>
                <input 
                  type="text" 
                  id="pincode" 
                  placeholder="Pincode" 
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group half">
                <label htmlFor="mobile">Mobile Number</label>
                <input 
                  type="text" 
                  id="mobile" 
                  placeholder="+91" 
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-footer">
              <button type="submit" className="next-btn">Next</button>
            </div>
          </form>
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

export default Welcome;

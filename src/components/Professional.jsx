import React, { useState } from 'react';
import './Professional.css';
import logo from "../assets/LOGO.png";

const Professional = ({ onNext, onHome, formData, updateFormData, onBeta, onMaterials }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    updateFormData({ [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Professional Data saved:', formData);
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
      <section className="professional-section">
        <div className="watermark">Kallisto</div>

        <div className="professional-content">
          <div className="professional-header">
            <span className="subtitle">Service Provider</span>
            <h1 className="professional-title">Hi {formData.fullName || "Partner"}</h1>
            <p className="professional-description">
              Tell us how you’d like others to know you professionally. Your role, expertise, and the work you want to be recognised for.
            </p>
          </div>

          <form className="professional-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="brandName">Professional Name/ Brand Name</label>
              <input 
                type="text" 
                id="brandName" 
                placeholder="Name" 
                value={formData.brandName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="serviceCategory">Service Category</label>
                <input 
                  type="text" 
                  id="serviceCategory" 
                  placeholder="Contractor" 
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group half">
                <label htmlFor="experience">years of experience</label>
                <input 
                  type="text" 
                  id="experience" 
                  placeholder="1 year" 
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group small">
              <label htmlFor="location">Location of operation</label>
              <input 
                type="text" 
                id="location" 
                placeholder="with In 10 Kms" 
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="aboutYou">Anything else you want clients to know about you.</label>
              <textarea 
                id="aboutYou" 
                placeholder="with In 10 Kms" 
                rows="5"
                value={formData.aboutYou}
                onChange={handleChange}
              ></textarea>
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

export default Professional;

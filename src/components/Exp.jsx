import React, { useState } from 'react';
import './Exp.css';
import logo from "../assets/LOGO.png";

const Exp = ({ onNext, onHome, formData, updateFormData }) => {
  const handleChange = (e, field) => {
    updateFormData({ [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Expression Data saved (API ready):', formData);
    if (onNext) onNext();
  };

  return (
    <div className="kallisto-container">
      {/* HEADER / NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={onHome} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Kallisto" className="main-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#beta">Beta</a></li>
          <li><a href="#materials">Materials</a></li>
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
      <section className="exp-section">
        <div className="watermark">Kallisto</div>

        <div className="exp-content">
          <div className="exp-header">
            <span className="subtitle">Service Provider</span>
            <h1 className="exp-title">Hi {formData.fullName || "Partner"}</h1>
            <p className="exp-description">
              Tell us more about the projects you’ve worked on. Your experience, the scale of work you handle, and the kind of projects you’re most confident delivering.
            </p>
          </div>

          <form className="exp-form" onSubmit={handleSubmit}>
            <div className="exp-row">
              <label>How many projects have you completed so far?</label>
              <input 
                type="text" 
                placeholder="3" 
                value={formData.projectsCompleted}
                onChange={(e) => handleChange(e, 'projectsCompleted')}
                required
              />
            </div>

            <div className="exp-row">
              <label>How many projects can you manage at a time?</label>
              <input 
                type="text" 
                placeholder="5" 
                value={formData.manageAtTime}
                onChange={(e) => handleChange(e, 'manageAtTime')}
                required
              />
            </div>

            <div className="exp-row">
              <label>What size or scale of projects do you usually handle?</label>
              <input 
                type="text" 
                placeholder="Below 25 Lacs" 
                value={formData.projectScale}
                onChange={(e) => handleChange(e, 'projectScale')}
                required
              />
            </div>

            <div className="exp-row">
              <label>What is the average duration of your projects?</label>
              <input 
                type="text" 
                placeholder="6 Months" 
                value={formData.averageDuration}
                onChange={(e) => handleChange(e, 'averageDuration')}
                required
              />
            </div>

            <div className="exp-row">
              <label>Do you work with an in-house team or external labour?</label>
              <input 
                type="text" 
                placeholder="Yes" 
                value={formData.teamStructure}
                onChange={(e) => handleChange(e, 'teamStructure')}
                required
              />
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

export default Exp;

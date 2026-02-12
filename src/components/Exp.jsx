import React, { useState } from 'react';
import './Exp.css';
import logo from "../assets/LOGO.png";

const Exp = ({ onNext, onHome, formData, updateFormData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [errors, setErrors] = useState({
    projectsCompleted: '',
    manageAtTime: '',
    projectScale: '',
    averageDuration: '',
    teamStructure: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    
    if (field === 'projectsCompleted' || field === 'manageAtTime') {
      if (value !== '' && !/^\d*$/.test(value)) {
        setErrors(prev => ({ ...prev, [field]: 'Please enter only numbers' }));
        return;
      }
      setErrors(prev => ({ ...prev, [field]: '' }));
    } else if (value.trim() !== '') {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    
    updateFormData({ [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.projectsCompleted || !formData.projectsCompleted.toString().trim()) {
      newErrors.projectsCompleted = 'Required';
    }
    if (!formData.manageAtTime || !formData.manageAtTime.toString().trim()) {
      newErrors.manageAtTime = 'Required';
    }
    if (!formData.projectScale) newErrors.projectScale = 'Please select project scale';
    if (!formData.averageDuration) newErrors.averageDuration = 'Please select project duration';
    if (!formData.teamStructure) newErrors.teamStructure = 'Please select team structure';

    if (Object.keys(newErrors).length > 0) {
      setErrors(prev => ({ ...prev, ...newErrors }));
      return;
    }

    if (errors.projectsCompleted || errors.manageAtTime) return;
    
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
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#beta" onClick={() => setIsMenuOpen(false)}>Beta</a></li>
          <li><a href="#materials" onClick={() => setIsMenuOpen(false)}>Materials</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
          <li><a href="#career" onClick={() => setIsMenuOpen(false)}>Career</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* FORM SECTION */}
      <section className="exp-section">
        <img src={logo} alt="" className="watermark" />

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
              {errors.projectsCompleted && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.projectsCompleted}</span>}
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
              {errors.manageAtTime && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.manageAtTime}</span>}
            </div>

            <div className="exp-row">
              <label>What size or scale of projects do you usually handle?</label>
              <select 
                value={formData.projectScale}
                onChange={(e) => handleChange(e, 'projectScale')}
                required
              >
                <option value="" disabled>Select scale</option>
                <option value="Below 25 Lacs">Below 25 Lacs</option>
                <option value="25 - 50 Lacs">25 - 50 Lacs</option>
                <option value="50 Lacs - 1 Cr">50 Lacs - 1 Cr</option>
                <option value="1 Cr - 5 Cr">1 Cr - 5 Cr</option>
                <option value="Above 5 Cr">Above 5 Cr</option>
              </select>
              {errors.projectScale && <span className="error-message" style={{ color: 'red', fontSize: '11px', marginTop: '5px', display: 'block' }}>{errors.projectScale}</span>}
            </div>

            <div className="exp-row">
              <label>What is the average duration of your projects?</label>
              <select 
                value={formData.averageDuration}
                onChange={(e) => handleChange(e, 'averageDuration')}
                required
              >
                <option value="" disabled>Select duration</option>
                <option value="Less than 3 Months">Less than 3 Months</option>
                <option value="3 - 6 Months">3 - 6 Months</option>
                <option value="6 - 12 Months">6 - 12 Months</option>
                <option value="12 - 24 Months">12 - 24 Months</option>
                <option value="More than 2 Years">More than 2 Years</option>
              </select>
              {errors.averageDuration && <span className="error-message" style={{ color: 'red', fontSize: '11px', marginTop: '5px', display: 'block' }}>{errors.averageDuration}</span>}
            </div>

            <div className="exp-row">
              <label>Do you work with an in-house team or external labour?</label>
              <select 
                value={formData.teamStructure}
                onChange={(e) => handleChange(e, 'teamStructure')}
                required
              >
                <option value="" disabled>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.teamStructure && <span className="error-message" style={{ color: 'red', fontSize: '11px', marginTop: '5px', display: 'block' }}>{errors.teamStructure}</span>}
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

export default Exp;

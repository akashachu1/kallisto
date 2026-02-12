import React, { useState } from 'react';
import './Professional.css';
import logo from "../assets/LOGO.png";

const Professional = ({ onNext, onHome, formData, updateFormData, onBeta, onMaterials }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [errors, setErrors] = useState({
    brandName: '',
    serviceCategory: '',
    experience: '',
    location: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    if (value.trim() !== '') {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
    
    updateFormData({ [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.brandName.trim()) newErrors.brandName = 'Professional Name is required';
    if (!formData.serviceCategory.trim()) newErrors.serviceCategory = 'Service Category is required';
    if (!formData.experience || !formData.experience.trim()) {
       newErrors.experience = 'Experience is required';
    }
    if (!formData.location.trim()) newErrors.location = 'Location is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(prev => ({ ...prev, ...newErrors }));
      return;
    }

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

      {/* FORM SECTION */}
      <section className="professional-section">
        <img src={logo} alt="" className="watermark" />

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
              {errors.brandName && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.brandName}</span>}
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
                {errors.serviceCategory && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.serviceCategory}</span>}
              </div>
              <div className="form-group half">
                <label htmlFor="experience">years of experience</label>
                <select 
                  id="experience" 
                  value={formData.experience} 
                  onChange={handleChange} 
                  required
                >
                  <option value="" disabled>Select experience</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                {errors.experience && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.experience}</span>}
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
              {errors.location && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.location}</span>}
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

export default Professional;

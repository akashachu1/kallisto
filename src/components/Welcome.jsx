import React, { useState } from 'react';
import './Welcome.css';
import logo from "../assets/LOGO.png";

const Welcome = ({ onNext, onHome, formData, updateFormData, onBeta, onMaterials }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [errors, setErrors] = useState({
    fullName: '',
    address: '',
    pincode: '',
    mobile: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'pincode') {
      if (value !== '' && !/^\d*$/.test(value)) {
        setErrors(prev => ({ ...prev, pincode: 'Pincode must contain only digits' }));
        return;
      }
      if (value.length > 6) {
        setErrors(prev => ({ ...prev, pincode: 'Pincode cannot exceed 6 digits' }));
        return;
      }
      setErrors(prev => ({ ...prev, pincode: '' }));
    }

    if (id === 'mobile') {
      if (value !== '' && !/^\+?\d*$/.test(value)) {
        setErrors(prev => ({ ...prev, mobile: 'Invalid format. Use +91 or digits only' }));
        return;
      }
      setErrors(prev => ({ ...prev, mobile: '' }));
    }

    // Clear empty field error on type
    if (value.trim() !== '') {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }

    updateFormData({ [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.address.trim()) newErrors.address = 'Contact Address is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (formData.pincode.length !== 6) {
      newErrors.pincode = 'Pincode must be exactly 6 digits';
    }
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile Number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(prev => ({ ...prev, ...newErrors }));
      return;
    }

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
      <section className="welcome-section">
        <div className="watermark">K▲llisto</div>

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
              {errors.fullName && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.fullName}</span>}
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
              {errors.address && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.address}</span>}
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
                {errors.pincode && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.pincode}</span>}
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
                {errors.mobile && <span className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.mobile}</span>}
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

export default Welcome;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-title">KeenKeeper</h2>
          <p className="footer-subtitle">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links Section */}
        <div className="social-section">
          <p className="social-heading">Social Links</p>
          <div className="social-icons">
            <a href="#" className="social-icon-link">
              <img src="/assets/instagram.png" alt="Instagram" />
            </a>
            <a href="#" className="social-icon-link">
              <img src="/assets/facebook.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon-link">
              <img src="/assets/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Copyright & Legal Section */}
        <div className="footer-bottom">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
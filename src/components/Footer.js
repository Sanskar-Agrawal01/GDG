// Footer.js
import React from 'react';
import './Footer.css';
import logo from './logo.png';
import info1 from './info1.png';
import info2 from './info2.png';
import info3 from './decorative-elements.png';
import social1 from './social1.png';
import social2 from './social2.png';
import social3 from './social3.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <br>
          </br>
          <h3 style={{color:' rgba(95, 95, 95, 1)'}}>Google Developer Groups</h3>
          <p><span style={{color:'rgba(66, 133, 244, 1)'}}>On Campus</span> • Ramdeobaba University</p>
        </div>
        <div className="footer-right">
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i><img src={info1} alt="Instagram" /> Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur- 440013</p>
            <p><i className="fas fa-envelope"></i><img src={info2} alt="Instagram" /> <a href="mailto:dsc.rknec@gmail.com">dsc.rknec@gmail.com</a></p>
          </div>
          <div className="social-links">
            <p>Follow Us:</p>
            <a href="https://instagram.com"><img src={social1} alt="Instagram" /></a>
            <a href="https://linkedin.com"><img src={social2} alt="LinkedIn" /></a>
            <a href="https://twitter.com"><img src={social3} alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer-decor">
      <img src={info3} alt="Instagram" />
      </div>
    </footer>
  );
}
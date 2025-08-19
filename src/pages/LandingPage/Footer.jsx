import React from "react";
import "../../styles/Common/Footer.css"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container">

        {/* Left: Logo */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Atech Logo" className="logo" />
          <p className="subtitle">Logistics & Distribution</p>
        </div>

        {/* Middle: Form */}
        <div className="footer-form">
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <button type="submit">SUBMIT</button>
        </div>

        {/* Right: Links + Contact */}
        <div className="footer-links">
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#employees">Employees</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#shipments">Track Shipments</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>CONTACT ATECH</h4>
          <p><strong>Phone</strong> 707-526-1910</p>
          <p><strong>Email</strong> info@atechlogistics.com</p>

          <h4>CORPORATE OFFICE</h4>
          <p>7 College Avenue<br />Delhi, India 495452</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Atech Logistics</p>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer;
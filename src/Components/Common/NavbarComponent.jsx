import React, { useState } from "react";
import "../../styles/Common/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Mark8 Logistics</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Home Direct Link */}
        <a href="/" className="nav-link">Home</a>

        {/* About Atech Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">About Us▾</button>
          <div className="dropdown-content">
            <a href="#company">Company</a>
            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Services ▾</button>
          <div className="dropdown-content">
            <a href="#logistics">Logistics</a>
            <a href="#consulting">Consulting</a>
            <a href="#support">Support</a>
          </div>
        </div>

        {/* Login Direct Link */}
        <a href="/login" className="nav-link login-link">Login</a>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
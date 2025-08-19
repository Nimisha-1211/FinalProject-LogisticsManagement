import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="nav-link">Home</Link>

        <div className="dropdown">
          <button className="dropbtn">About Us▾</button>
          <div className="dropdown-content">
            <Link to="/aboutus">Company</Link>
            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Services ▾</button>
          <div className="dropdown-content">
            <a href="#logistics">Logistics</a>
            <a href="#consulting">Consulting</a>
            <a href="#support">Support</a>
          </div>
        </div>

        <Link to="/login" className="nav-link login-link">Login</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
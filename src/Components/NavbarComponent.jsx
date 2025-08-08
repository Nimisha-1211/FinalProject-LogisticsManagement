import React from 'react';
import './Navbar.css'; // 

const Navbar = () => {
  return (
    <nav className="navbar">
      { /* Logo Section */}
      <div className="navbar-logo">
        <a href="/">🚚 Logistics Portal</a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/shipments">Shipments</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/tracking">Tracking</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/About">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
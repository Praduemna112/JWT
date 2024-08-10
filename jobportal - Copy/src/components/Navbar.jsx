import React from 'react';
import './Navbar.css';
import img from '../../src/assets/p.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={img} alt="Naukri Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Jobs</a>
        <a href="/">Companies</a>
        <a href="/">Services</a>
      </div>
      <div className="navbar-actions">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;

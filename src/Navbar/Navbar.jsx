import React from 'react';
import './Navbar.css'; // You can style your Navbar in Navbar.css file
import a from './Logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={a} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#pages">Pages</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{ color: 'white' }}>Art Gallery</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/artworks">Artworks</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login/Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

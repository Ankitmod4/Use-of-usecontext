// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file for styling

const Navbar = () => {
    return (
      <>
    <nav className="navbar">
      <div className="logo">My Logo</div>
      <div className="menu">
        <span>Home</span>
        <span>About</span> 
        <span>Contact</span>
      </div>
            </nav>
           
      </> 
  );
};

export default Navbar;

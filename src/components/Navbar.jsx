import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/add-product" className="navbar-link">Add Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

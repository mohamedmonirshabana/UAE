import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div id="logo" className="logo">
        <img src="images/shopping.png" alt="" />
      </div>
      <ul className="nav-menu">
        <li className="menu-items">
          <a href="#">Login</a>
        </li>
        <li className="menu-items">|</li>
        <li className="menu-items">
          <a href="#">Register</a>
        </li>
      </ul>
      <ul className="social-media">
        <li className="social-links">
          <a href="#">
            <img src="images/facebook-logo.png" alt="" />
          </a>
        </li>
        <li className="social-links">
          <a href="#">
            <img src="images/instagram.png" alt="" />
          </a>
        </li>
        <li className="social-links">
          <a href="#">
            <img src="images/linkedin.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

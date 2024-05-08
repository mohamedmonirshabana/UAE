import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar">
      <div id="logo" class="logo">
        <img src="images/shopping.png" alt="" />
      </div>
      <ul class="nav-menu">
        <li class="menu-items">
          <a href="#">Login</a>
        </li>
        <li class="menu-items">|</li>
        <li class="menu-items">
          <a href="#">Register</a>
        </li>
      </ul>
      <ul class="social-media">
        <li class="social-links">
          <a href="#">
            <img src="images/facebook-logo.png" alt="" />
          </a>
        </li>
        <li class="social-links">
          <a href="#">
            <img src="images/instagram.png" alt="" />
          </a>
        </li>
        <li class="social-links">
          <a href="#">
            <img src="images/linkedin.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

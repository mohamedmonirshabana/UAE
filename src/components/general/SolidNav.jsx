import React from 'react';
import Shopping from './shopping.png';
import facebook from './facebook-logo.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import { Link } from 'react-router-dom';
const SolidNav = () => {
  return (
    <nav className="navbar" style={{ background: '#03AED2' }}>
      <div id="logo" className="logo">
        <img src={Shopping} alt="" />
      </div>
      <ul className="nav-menu">
        <li className="menu-items">
          <a href="#">Login</a>
        </li>
        <li className="menu-items">|</li>
        <li className="menu-items">
          <a href="#">Register</a>
        </li>
        <li className="menu-items">|</li>
        <li className="menu-items">
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul className="social-media" style={{ background: '#03AED2' }}>
        <li className="social-links">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li className="social-links">
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li className="social-links">
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SolidNav;

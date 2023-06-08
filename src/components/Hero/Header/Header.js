import React from 'react';
import './style.css';
import logo from '../../../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="navContainer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navigation">
          <ul className="menu">
            <li>
              <a href="#" className='active'>Home</a>
            </li>
            <li>
              <a href="#">Network</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Knowledge Center</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="actionButtons">
        <button className="contactButton">
          Contact Us
        </button>
        <button className="loginButton">
          Log In
        </button>
      </div>
    </header>
  );
}

export default Header;

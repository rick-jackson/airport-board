import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
          alt="Header logo"
        />
      </Link>

      <ul className="header__nav">
        <li className="header__nav-item">For passengers</li>
        <li className="header__nav-item">IEV Services</li>
        <li className="header__nav-item">VIP</li>
        <li className="header__nav-item">Corporate</li>
        <li className="header__nav-item">Press Room</li>
        <li className="header__nav-item">EN</li>
      </ul>
    </header>
  );
};

export default Header;

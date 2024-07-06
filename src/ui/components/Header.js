import React from "react";
import inc from "../../assets/inc.png";
import "../../styles/Header.css";
import { Link } from "react-router-dom";

const Header = ({ setClick }) => {
  return (
    <header className="header">
      <Link to="/" className="link logo">
        <img src={inc} className="icon-img" />
      </Link>

      <div className="flex">
        <Link to="/contact" className="contact">
          contact us
        </Link>

        <div className="menu" onClick={() => setClick(true)}>
          <i className="fas fa-bars icon-menu"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

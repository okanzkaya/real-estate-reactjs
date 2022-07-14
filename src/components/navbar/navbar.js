import logo from "../../assets/images/logo.svg";
import hamburgerMenu from "../../assets/images/hamburger-menu.svg";
import close from "../../assets/images/close.svg";
import "./navbar.css";
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function Navbar() {
  const openMenu = () => {
    const menu = document.getElementsByClassName("hamburger-menu")[0];
    if (menu.style.display != "block") {
      menu.style.display = "block";
      menu.style.animationName = "hamburger-menu-open";
    } else {
      menu.style.animationName = "hamburger-menu-close";
      setTimeout(function() {
        menu.style.display = "none";
      }, 480);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <a href="#">Sign in</a>
      </div>
      <div id="center-logo" className="navbar-item">
        <Link to="/">
          <img src={logo}></img>
        </Link>
        <p>
          Demo
          <br />
          Real Estate
        </p>
      </div>
      <div className="navbar-item">
        <img onClick={openMenu} src={hamburgerMenu} />
        <div className="hamburger-menu">
          <a onClick={openMenu}>
            <img src={close}></img>
          </a>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sale">Sale</Link>
            </li>
            <li>
              <Link to="/item">Item</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

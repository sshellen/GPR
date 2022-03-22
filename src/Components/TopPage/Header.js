import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import hamburgerMenu from "/img/hamburgerMenu.png";
import logo from "/img/gprLogo.png";
import "./css/index.css";
import close from "/img/whiteCloseIcon.png";
const Header = () => {
  let menuOpen = false;
  let body = document.body;
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const toggleMenu = () => {
    if (menuOpen) {
      body.classList.remove("fixed");
      body.removeChild(overlay);
      menuOpen = false;
      gsap.to("#flyoutMenu", {
        duration: 0.5,
        right: "-100%",
        onComplete: () => {
          let close = document.getElementById("rolloverMenuClose");
          close.style.opacity = "0";
        },
      });
    } else {
      menuOpen = true;
      body.classList.add("fixed");
      body.appendChild(overlay);
      gsap.to("#flyoutMenu", {
        duration: 0.3,
        right: 0,
        onComplete: () => {
          let close = document.getElementById("rolloverMenuClose");
          let width = window.innerWidth;
          console.log(width);
          close.style.width = width - 100 + "px";
          close.style.opacity = "1.0";
        },
      });
    }
  };

  return (
    <>
      <div className="topPage tablet">
        <div className="topRow">
          <img src={logo} className="logo" />

          <div className="topRight">
            <button className="blueButton">DONATE</button>
            <Link onClick={toggleMenu}>
              <img
                src={hamburgerMenu}
                className="hamburgerMenu"
                alt="hamburger menu"
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div id="flyoutMenu">
          <div className="menuItems">
            <div className="close" id="rolloverMenuClose">
              <a onClick={toggleMenu}>
                <img src={close} />
              </a>
            </div>
            <ul>
              <li onClick={toggleMenu}>
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li onClick={toggleMenu}>
                ARTISTS
                <ul>
                  <li>
                    <Link to={"/viewartists"}>VIEW ALL ARTISTS</Link>
                  </li>
                  <li>
                    <Link to={"/contribute"}>CONTRIBUTE AS AN ARTIST</Link>
                  </li>
                </ul>
              </li>
              <li onClick={toggleMenu}>
                <Link to={"/news"}>NEWS</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to={"/events"}>EVENTS</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to={"/contact"}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

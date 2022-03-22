import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";
import logo from "/img/gprLogo.png";
import Header from "./Header";

const TopPage = () => {
  let menuOpen = false;
  let menuTimer;
  const showOptions = (e, id) => {
    let margin =
      window.innerWidth > 1440 ? Math.round((window.innerWidth - 1440) / 2) : 0;
    let target = e.target.getBoundingClientRect();

    let menu = document.getElementsByClassName(id)[0];
    menu.style.left = Math.round(target.x) - margin + "px";
    menu.style.top = Math.round(target.y + target.height) + "px";
    menu.classList.add("showMenu");
    menuOpen = true;
    menuTimer = setTimeout(() => {
      if (menuOpen === true) {
        menu.classList.remove("showMenu");
      }
    }, 1000);
  };
  const hideOptions = (e, id) => {
    if (menuOpen === true) {
      menuOpen = false;

      let menu = document.getElementsByClassName(id)[0];
      menu.classList.remove("showMenu");
    }
  };
  return (
    <>
      <header className="topPage desktop">
        <Link to={"/Home"}>
          <img src={logo} />
        </Link>

        <div className="topRight">
          <div className="search">
            <button className="blueButton">DONATE</button>
          </div>
          <div className="topNav">
            <ul>
              <li>
                <Link to={"/About"}>ABOUT</Link>
              </li>
              <li>
                <Link
                  id="artistsLink"
                  to="viewartists"
                  onMouseOver={(e) => showOptions(e, "artistsLink")}
                >
                  ARTISTS
                </Link>
              </li>
              <li>
                <Link to={"/news"}>NEWS</Link>
              </li>
              <li>
                <Link to={"/events"}>EVENTS</Link>
              </li>
              <li>
                <Link to={"/contact"}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="pulldownMenu artistsLink"
          onMouseLeave={(e) => hideOptions(e, "artistsLink")}
          onMouseOver={() => clearTimeout(menuTimer)}
        >
          <ul>
            <li>
              <Link to={"/viewartists"}>VIEW ALL ARTISTS</Link>
            </li>
            <li>
              <Link to="/contribute">CONTRIBUTE AS AN ARTIST</Link>
            </li>
          </ul>
        </div>
      </header>
      <Header />
    </>
  );
};

export default TopPage;

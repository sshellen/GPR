import React from "react";
import { Link } from "react-router-dom";

const RollOver = () => {
  let menuOpen = false;
  let menuTimer;
  const showOptions = (e, id) => {
    let target = e.target.getBoundingClientRect();
    let menu = document.getElementsByClassName(id)[0];
    menu.style.left = Math.round(target.x) + "px";
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
          <Link to={"/contribute"}>CONTRIBUTE AS AN ARTIST</Link>
        </li>
      </ul>
    </div>
  );
};

export default RollOver;

import React, { useState } from "react";
import "./navbar.css";

import Menu from "../Menu";

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="in_navbar">
        <div className="brand">myShop</div>
        <div className="nav">
          <Menu />
        </div>
      </div>
      <div className="sign">
        <a href="#GetStarted">Get Started</a>
      </div>
      <div className="menu">
        {toogleMenu ? (
          <i
            class="fi fi-br-cross-small"
            style={{ color: "#0aa354", fontSize: "20px" }}
            onClick={() => setToogleMenu(false)}
          ></i>
        ) : (
          <i
            class="fi fi-br-bars-staggered"
            style={{ color: "#0aa354", fontSize: "20px" }}
            onClick={() => setToogleMenu(true)}
          ></i>
        )}
        {toogleMenu && (
          <div className="menu-list scale-up-center">
            <Menu />
            <div className="menu-list-sign">
              <a href="#GetStarted">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

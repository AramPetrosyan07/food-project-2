import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const mobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="Header mobileHeader">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <div className={menu ? "mobileBg" : ""}>
        <i
          className={
            menu ? "fa-solid fa-bars brgerIsWhitw" : "fa-solid fa-bars"
          }
          onClick={() => mobileMenu()}
        ></i>
        <div className={menu ? "linkes" : "classNone"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

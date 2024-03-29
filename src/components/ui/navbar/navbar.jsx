import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../static/logo.png";
import "./styles.css";

const NavBar = () => {
  let [navToggleClick, setNavToggleClick] = useState(false);

  let navBarClasses = "topnav ";

  if (navToggleClick) navBarClasses += "responsive";

  const handleNavToggleClick = () => {
    setNavToggleClick(!navToggleClick);
  };

  return (
    <div className={navBarClasses}>
      <img src={logo} alt="" className="logo" />
      <NavLink className="nav-item" to="/pdfSplit">
        PDF Split
      </NavLink>
      <NavLink className="nav-item" to="/pdfMerge">
        PDF Merge
      </NavLink>
      <NavLink className="nav-item" to="/opportunities">
        Opportunities
      </NavLink>
      <NavLink className="nav-item" exact to="/">
        Courses
      </NavLink>
      <i
        className="fa fa-bars 
      nav-item icon"
        onClick={handleNavToggleClick}
      ></i>
    </div>
  );
};

export default NavBar;

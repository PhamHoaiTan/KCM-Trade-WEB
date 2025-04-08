import React, { useState } from "react";
import videoLogo from "../../assets/images/logo.mp4"
import iconBritain from "../../assets/images/icon-britain.png"

import "./Navbar.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () =>{
    if (window.scroll >= 50){
      setNav(false);
    } 
    else {
      setNav(false)
    }
  }
  return (
    <div className="nav-container">
      <nav className={nav ? "nav active" : "navbar"}>
        {/* Logo Section */}
        <div className="logo-section">
          <video src={videoLogo} loop muted autoPlay height={45}/>
        </div>

        {/* Menu Items */}
        <ul className="menu">
          <li className="dropdown">
            <a href="#">About ▼</a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Trading ▼</a>
          </li>
          <li>
            <a href="#">Partnership</a>
          </li>
          <li className="dropdown">
            <a href="#">Education ▼</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Buttons & Language */}
        <div className="nav-buttons">
          <button className="btn sign-in">Sign In</button>
          <button className="btn open-account">Open Account</button>
          <img src={iconBritain} alt="English" className="language-icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

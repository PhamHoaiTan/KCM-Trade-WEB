import React, { useEffect, useState } from "react";
import videoBg from "../../assets/videoBg.mp4";
import "./Header.css";
import RotatingText from "./RotatingText";
const Header = () => {
  return (
    <div className="header">
      <div className="video-container">
        <video src={videoBg} autoPlay loop muted/>
      </div>
      <div class="header-content">
       <RotatingText/>
        <div class="hero-buttons">
          <button class="btn btn-outline">Sign In</button>
          <button class="btn btn-primary">Open Account</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

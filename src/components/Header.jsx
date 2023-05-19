import React from "react";
import "../styles/Header.css";

//logo
import logoApp from "../images/cat.png";

export function Header() {
  return (
    <div className="Header">
      <div className="Header-title">
        <div className="Header-content-title">
          <img className="Header-logoApp" src={logoApp} alt="" />
          <h1>
            Cantera <span>Music</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

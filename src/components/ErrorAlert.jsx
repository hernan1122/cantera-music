import React from "react";
import { Link } from "react-router-dom";
import "../styles/AddAlert.css";

import { VscHome } from "react-icons/vsc";
export function ErrorAlert({ see, notSee, alert, setAlert }) {
  const GoToHome = () => {
    setAlert(!alert);
    notSee(!see);
  };

  return (
    <div className="AddAlert">
      <div className="AddAlert-container">
        <div className="AddAlert-container-title">
          <h2>
            Oops, el audio no se guardo, <br />
            <span>Inténtalo más tarde</span>.
          </h2>
        </div>
        <div className="AddAlert-container-btn">
          <Link className="AddAlert-btn" onClick={GoToHome} to={'/'}>
            <VscHome className="AddAlert-btn-icon" />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

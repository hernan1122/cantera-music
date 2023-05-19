import React from "react";
import { Link } from "react-router-dom";
import "../styles/AddAlert.css";

//icons
import { VscHome } from "react-icons/vsc";
import { BsPlayCircle } from "react-icons/bs";

export function AddAlert({ see, notSee, alert, setAlert, dataFile }) {
  const GoToHome = () => {
    setAlert(!alert);
    notSee(!see);
  };

  return (
    <div className="AddAlert">
      <div className="AddAlert-container">
        <div className="AddAlert-container-title">
          <h2>
            Audio Guardado <br />
            <span>Exitosamente</span>.
          </h2>
        </div>
        <div className="AddAlert-container-btn">
          <Link className="AddAlert-btn" onClick={GoToHome} to={'/'}>
            <VscHome className="AddAlert-btn-icon" />
            Ir al inicio
          </Link>
          <Link className="AddAlert-btn" to={`/player?id=${dataFile.id}&${dataFile.categoryId}`}>
            <BsPlayCircle className="AddAlert-btn-icon" />
            Reproducir audio
          </Link>
        </div>
      </div>
    </div>
  );
}

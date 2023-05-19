import React from "react";
import { Link } from "react-router-dom";
import '../styles/error521.css'


import logoApp from '../images/cat.png';
import imgError from '../images/error521.jpg'

export function Error521(){
  return(

    <div className='error521-header'>
      <div className="error521-header-title">
        <div className="error521-header-content-title">
          <img className="error521-header-logoApp" src={logoApp} alt="" />
            <h1>Cantera <span>Music</span></h1>
        </div>
      </div>
      <main>
      <div className="error521-content-imgError">
          <img className="error521-imgError" src={imgError} alt="gatoBurlon" />
          <h1 className="error521-error-LineText">El servidor Web<br/>ha caído</h1>
          <Link className="error521-error-volver" to="/">Volver</Link>
      </div>
      </main>
    </div>
  )
}
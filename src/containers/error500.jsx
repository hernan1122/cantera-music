import React from "react";
import { Link } from "react-router-dom";
import '../styles/error500.css'


import logoApp from '../images/cat.png';
import imgError from '../images/error500.png'

export function Error500(){
  return(
    
    <div className='error500-header'>
      <div className="error500-header-title">
        <div className="error500-header-content-title">
          <img className="error500-header-logoApp" src={logoApp} alt="" />
            <h1>Cantera <span>Music</span></h1>
        </div>
      </div>
      <main>
      <div className="error500-content-imgError">
          <img className="error500-imgError" src={imgError} alt="gatoBurlon" />
          <h1 className="error500-error-LineText">Hay un error<br/>en el servidor</h1>
          <Link className="error500-error-volver" to="/">Volver</Link>
      </div>
      </main>
    </div>
  )
}
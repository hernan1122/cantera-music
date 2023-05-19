import React from "react";
import { Link } from "react-router-dom";
import '../styles/NotFound.css'


import logoApp from '../images/cat.png';
import imgError from '../images/error404.jpg'

export function NotFound(){
  return(
    
    <div className='notFound-header'>
      <div className="notFound-header-title">
        <div className="notFound-header-content-title">
          <img className="notFound-header-logoApp" src={logoApp} alt="" />
            <h1>Cantera <span>Music</span></h1>
        </div>
      </div>
      <main>
      <div className="notFound-content-imgError">
          <img className="notFound-imgError" src={imgError} alt="mayonesaCat" />
          <h1 className="notFound-error-LineText">Oops!!<br/>Lo solicitado<br/>no existe</h1>
          <Link className="notFound-error-volver" to="/">Volver</Link>
      </div>
      </main>
    </div>
  )
}
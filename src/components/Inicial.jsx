import React from "react";
import '../styles/inicial.css'

import imgInicial from '../images/cat.png'

export function Inicial(){
  return(
    <div className="inicio-content-imgInicio">
          <img className="inicio-imgInicio" src={imgInicial} alt="cat cantera music" />
          <h1 className="inicio-texto">Cantera <span className="inicio-text2">Music</span></h1>          
        </div> 
  )
}     
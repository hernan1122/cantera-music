import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Categories } from "./Categories";
import { Add } from "./Add";
import '../styles/FooterMenu.css'

//icons
import { VscHome } from 'react-icons/vsc'
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategory } from 'react-icons/bi'
import { BiAddToQueue } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

export function FooterMenu() {
  const [seeModal, setSeeModal] = useState(false);
  const [seeCategories, setSeeCategories] = useState(false);

  const closeAdd = () => {
    setSeeModal(!seeModal)
  }

  const handleCategories = () => {
    setSeeCategories(!seeCategories);
  }

  return (
    <div className='FooterMenu'>
      <NavLink className='FooterMenu-link' to='/' activeclassname="active">
        <VscHome />
        <h6>Inicio</h6>
      </NavLink>
      <NavLink className='FooterMenu-link' to='/search' activeclassname="active">
        <AiOutlineSearch />
        <h6>Buscar</h6>
      </NavLink>
      <div className='FooterMenu-link' onClick={handleCategories}>
        <BiCategory className='FooterMenu-icons' />
        <h6>Categorías</h6>
      </div>
      {seeCategories && <div className="FooterMenu-container-categories">
        <div className="FooterMenu-categories">
          <CgClose
            className="FooterMenu-categories-icon"
            onClick={handleCategories}
          />
          <Categories />
        </div>
      </div>}
      <div className='FooterMenu-link' onClick={closeAdd}>
        <BiAddToQueue className='FooterMenu-icons' />
        <h6>Agregar</h6>
      </div>
      <Add see={seeModal} notSee={setSeeModal} />
    </div>
  );
}

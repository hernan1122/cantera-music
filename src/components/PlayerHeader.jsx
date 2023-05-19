import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/PlayerHeader.css";

//Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";
import { useState } from "react";

export function PlayerHeader() {
  const [categoryLink, setCategoryLink] = useState('')
  const [_, categoryNumber] = window.location.href.split('&')
  useEffect(()=>{
    if (categoryNumber == 1){
      setCategoryLink('/categorysong')
    }
    if (categoryNumber == 2){
      setCategoryLink('/categorypodcast')
    }
    if (categoryNumber == 3){
      setCategoryLink('/categoryaudiobooks')
    }
  }, [])
  return (
    <div className="PlayerHeader">
      <Link to="/">
        <BsArrowLeftShort className="PlayerHeader-Icon-Back" />
      </Link>
      <h2>Reproduciendo</h2>
      <Link to={categoryLink}>
        <BsMusicNoteList className="PlayerHeader-Icon" />
      </Link>
    </div>
  );
}

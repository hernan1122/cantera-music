import React, { useState, useEffect } from 'react';
import {PlayerHeader} from "../components/PlayerHeader";
import {PlayerSlider} from "../components/PlayerSlider";
import { FooterMenu } from "../components/FooterMenu";
import { LoadingPlayer } from '../components/LoadingPlayer';

export function Player() {
  const [isLoading, setIsloading] = useState(true)
  const [api, setApi] = useState([])
  const [baseUrl, categoryNumberYId] = window.location.href.split('=');
  if (baseUrl == 'http://localhost:5173/player') {
    window.location.href = window.location.href + '/NotFound'
  }
  const [idUrl, categoryId] = categoryNumberYId.split('&');
  const index = api.findIndex((item)=> item.id === Number(idUrl))
  const url = `http://18.117.98.49:5000/api/v1/categories/${categoryId}`;
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status === 500) {
          window.location.href = window.location.href + '500'
      } 
        if (response.status === 521) {
          window.location.href = window.location.href + '521'
      } 
      if (response.status === 404 || response.status != 200) {
        window.location.href = window.location.href + 'notFound'
    } 
        if (response.status === 200) {
          return response.json();
      } 
      })
      .then(data=>{
        setApi(data.files)
        setIsloading(false);
      })
  }, [])
  
  return (
    <div className="Player">
      <PlayerHeader />
      {isLoading ? <LoadingPlayer /> : <PlayerSlider api={api} indexp={index}/>}
      <FooterMenu/>
    </div>
  )
}

import React from "react";
import '../styles/PlayerButtons.css'

//icons
import {BsPlayFill, BsPauseFill, BsShuffle, BsRewindFill, BsFillFastForwardFill, BsRepeat1, BsRepeat } from "react-icons/bs"


export function PlayerButtons({isPlaying, handlePlayPause, updateIndex, index, api, handleRepeat, isRepeated}) {

  return(
    <div className="PlayerButtons">
      <div className="PlayerButtons-container">
        <button >
          <BsShuffle className="small"/>
        </button>
        <button onClick={()=>{
          if (index<=0) {
            updateIndex(index = api.length-1)
          }else{
            updateIndex(index -1)
          }
        }}>
          <BsRewindFill className="small"/>
        </button>
        <button
          className="play-pause"
          onClick={handlePlayPause}
        >
          {isPlaying ? < BsPauseFill className="btnPause" /> : <BsPlayFill className="btnPlay" />}
        </button>
        <button onClick={()=>{
          if (index >= api.length-1) {
            updateIndex(index = 0)
          }else{
            updateIndex(index + 1)
          }
          }}>
          <BsFillFastForwardFill className="small"/>
        </button>
        <button onClick={handleRepeat}>
          {isRepeated ? <BsRepeat1 className="small"/> : <BsRepeat className="small"/>}
        </button>
      </div>
    </div>
  )
}

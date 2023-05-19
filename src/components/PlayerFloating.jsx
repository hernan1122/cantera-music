import React, { useEffect } from 'react';
import '../styles/PlayerFloating.css'

//icons
import { BsPauseFill } from "react-icons/bs"
import { BiPlay, BiSkipNext } from "react-icons/bi"

export function PlayerFloating({ currentSong, isPlaying, handlePlayPause, updateIndex, index, api, progressBarRef, duration, audioRef }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current && progressBarRef.current) {
        const percent = (audioRef.current.currentTime / duration) * 100;
        progressBarRef.current.style.width = `${percent}%`
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [duration])

  return (
    <div className="PlayerFloating">
      <div className="PlayerFloating-Progressline">
        <div ref={progressBarRef}></div>
      </div>
      <div className="PlayerFloating-audio">
        <img src={currentSong.imageUrl} alt={currentSong.nameFile} />
        <div>
          <h3>{currentSong.nameFile}</h3>
          <p>{currentSong.nameAuthor}</p>
        </div>
      </div>
      <div className="PlayerFloating-controls">
        <button
          className="PlayerFloating-play-pause"
          onClick={handlePlayPause}
        >
          {isPlaying ? < BsPauseFill className="PlayerFloating-btnPause" /> : <BiPlay className="PlayerFloating-btnPlay" />}
        </button>
        <button className="PlayerFloating-next" onClick={()=>{
          if (index >= api.length-1) {
            updateIndex(index = 0)
          }else{
            updateIndex(index + 1)
          }
          }}>
          <BiSkipNext className="small"/>
        </button>
      </div>
    </div>
  );
}

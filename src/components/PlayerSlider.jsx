import {React, useState, useEffect, useRef} from "react";
import { PlayerButtons } from "./PlayerButtons";
import '../styles/PlayerSlider.css'

export function PlayerSlider({api, indexp}) {
  const [songDescription, setSongDescription] = useState({name:'' , artist: ''})
  const [isPlaying, setIsPlaying] = useState(true)
  const [index, setIndex] = useState(indexp)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const progressBarRef = useRef(null)
  const [totalTime, setTotalTime] = useState('0:00')
  const [currentTimeSong, setCurrentTimeSong] = useState('0:00')
  const [isRepeated, setIsrepeated] = useState(false)
  useEffect(() => {
    setSongDescription({name: api[index].nameFile, artist: api[index].nameAuthor})
  }, [index])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current && progressBarRef.current) {
        const percent = (audioRef.current.currentTime / duration) * 100;
        progressBarRef.current.style.width = `${percent}%`
      }
      let min = Math.floor(audioRef.current.currentTime / 60);
      let seconds = audioRef.current.currentTime % 60;
      if (seconds <10){
        setCurrentTimeSong(`${min}:0${seconds.toFixed()}`)
      }else{
        setCurrentTimeSong(`${min}:${seconds.toFixed()}`)
      }
      if(audioRef.current.currentTime.toFixed()==(duration-1).toFixed() && !isRepeated){
        setIndex(index+1)
      }
    }, 1000)
    let minutos = Math.floor(audioRef.current.duration / 60);
    let segundosRestantes = audioRef.current.duration % 60;

    if (segundosRestantes <10){
      setTotalTime(`${minutos}:0${segundosRestantes.toFixed()}`)
    }else{
      setTotalTime(`${minutos}:${segundosRestantes.toFixed()}`)
    }
    return () => clearInterval(intervalId)
  }, [duration, isRepeated])

  const updateIndex = (newVal) => {
    setIndex(newVal)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }
  
  const handleRepeat = ()=>{
  setIsrepeated(!isRepeated)
}
  return (
    <>
      <audio
        ref={audioRef}  
        src={api[index].fileUrl}
        loop
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
      </audio>
      <div className='PlayerSlider'>
        <div className="PlayerSlider-container-slider">
          <section>
            {index<1 ? <div className="none"></div> :<img src={api[index-1].imageUrl} alt="" />}
          </section>
          <section>
            <img src={api[index].imageUrl} alt="" />
          </section>
          <section>
            {index>=api.length-1 ?  <div className="none"></div> : <img src={api[index+1].imageUrl} alt="" />}
          </section>
        </div>
      </div>
      <section className='PlayerSlider-container-description'>
        <div className="PlayerSlider-description">
          <h4>{songDescription.name}</h4>
          <p>{songDescription.artist}</p>
        </div>
        <div className="Progressline">
          <div ref={progressBarRef}></div>
        </div>
        <div className="PlayerSlider-TimeContainer">
          <span>{currentTimeSong}</span>
          <span>{totalTime}</span>
        </div>
      </section>
      <PlayerButtons isPlaying={isPlaying} handlePlayPause={handlePlayPause} api={api} index={index} updateIndex={updateIndex} isRepeated={isRepeated} handleRepeat={handleRepeat} />
    </>
  );
}
//Plnpmayer Slider

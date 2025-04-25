import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react' //atribui uma referencia a uma função,, variavel etc

const Player = ({duration, randomIdFromArtist, randomId2FromArtist, audio}) => {

  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPLaying, setIsPlaying] = useState(false);


  const playPause = () => {
    isPLaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPLaying)

    

    //console.log(formatTime(audioPlayer.current.currentTime));
  }

  const formatTime = (timeInSeconds) => {
    const  minutes = Math.floor(timeInSeconds / 60).toString()
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2,"0")

    return `${minutes}:${seconds}`;
  }

  const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":");
    const minutes = Number(splitArray[0]);
    const seconds = Number(splitArray[1]);

    return seconds + minutes * 60;
  }


  const durationInSeconds = timeInSeconds(duration);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  
  useEffect(() => {
      const intervalId = setInterval(() => {
        if (isPLaying) 
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

        progressBar.current.style.setProperty('--_progress', ((audioPlayer.current.currentTime / durationInSeconds) * 100) + "%");

        //console.log(progressBar);
      }, 1000);

      return () => clearInterval(intervalId);


  }, [playPause])

  return (
    <div className='player'>
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className='player__icon player__icon--play' icon={isPLaying ? faCirclePause : faCirclePlay}
        onClick={() => playPause()} />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div 
          ref={progressBar}
          className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>

    </div>
  )
}

export default Player

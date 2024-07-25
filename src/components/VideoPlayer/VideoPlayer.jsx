import React, { useRef, useState } from 'react';
import './VideoPlayer.css'
import video1 from '../../assets/img/images/5198159-uhd_3840_2160_25fps.mp4';

const VideoPlayer = ({playState,setPlayState}) => {
    const player = useRef(null);
    const closePlayer=(e) =>{
        if(e.target===player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video1} autoPlay muted controls></video>
    </div>

  );
};

export default VideoPlayer;

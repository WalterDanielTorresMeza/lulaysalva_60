// src/components/MusicPlayer/MusicPlayer.js
import React, { useRef, useState, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const btnRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(()=>{ /* autoplay bloqueado */ });
    }
    setPlaying(prev => !prev);
  };

  useEffect(() => {
    // Intenta “simular” el click nada más montar
    if (btnRef.current) {
      btnRef.current.click();
    }
  }, []);

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/a.mp3"
        loop
      />
      <img
        ref={btnRef}
        src={playing ? '../src/img/1.png' : '../src/img/1.png'}
        alt={playing ? 'Pausa' : 'Reproducir'}
        className="music-button"
        onClick={togglePlay}
      />
    </div>
  );
};

export default MusicPlayer;

// src/components/MusicPlayer/MusicPlayer.js
import React, { useRef, useState, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Al montar, carga pero no reproduce
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        /* en algunos móviles requiere interacción */
      });
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/sou.mp3"  /* tu mp3 en public/audio/music.mp3 */
        loop
      />
      <img
        src={playing ? '/2.png' : '/1.png'}
        alt={playing ? 'Pausa' : 'Reproducir'}
        className="music-button"
        onClick={togglePlay}
      />
    </div>
  );
};

export default MusicPlayer;

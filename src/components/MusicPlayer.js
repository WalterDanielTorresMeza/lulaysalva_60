// src/components/MusicPlayer/MusicPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Descomenta si quieres empezar en silencio y luego subir volumen:
    // audio.volume = 0;  
    const playPromise = audio.play();    // intenta reproducir
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Éxito: el audio está sonando
          setPlaying(true);
          // Si lo iniciaste en silencio, aquí podrías subir el volumen gradualmente:
          // audio.volume = 0.5;
        })
        .catch((error) => {
          // Si el navegador bloquea el autoplay, lo capturamos (policy)
          console.warn('Autoplay bloqueado, espera interacción del usuario.', error);
        });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/a.mp3"  /* asegúrate de tener public/audio/music.mp3 */
        loop
        // autoPlay  // también puedes dejar el atributo para navegadores compatibles
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

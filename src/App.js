import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Header        from './components/Header';
import Countdown     from './components/Countdown';
import PhotoCarousel from './components/PhotoCarousel';
import EventLocation from './components/EventLocation'
import FinalMessage from './components/FinalMessage';
import EventSchedule from './components/EventSchedule';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import EventLocationI from './components/Iglesia';

import './App.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, mirror: true });
  }, []);

  const images = ['/1w.png','/2w.png','/3w.png','/4w.png','/5w.png'];

  return (
<div>
      <div data-aos="fade-down">
      <Header />
      </div>
      <div data-aos="fade-down" className="music-player-container">
        <MusicPlayer />
      </div>
<div className="separator-tile" />
        

      <Countdown targetDate={new Date('2025-07-26T00:00:00')} />
  
        <div className="desliza-hint">
  <img src="/desliza.gif" alt="Desliza hacia abajo" />
</div>

<div className="separator-tile" />


        <div data-aos="zoom-in">
      <PhotoCarousel images={images} />
      </div>
<div className="separator-tile" />

      <div data-aos="fade-up">
      <EventLocation />
      </div>

<div className="separator-tile" />

      <div data-aos="fade-up">
      <EventSchedule />
      </div>

<div className="separator-tile" />

<div data-aos="fade-up">
  <FinalMessage />
</div>
<Footer />
</div>
  );
}

export default App;

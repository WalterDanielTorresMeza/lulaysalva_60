
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Iglesia.css';

const EventLocationI = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <section className="event-location" data-aos="fade-up">
      <h2 className="location-title">Misa</h2>
      {/* Imagen del lugar */}
      <div className="location-image-container">
        <img
          src="/quinta.jpg"
          alt="Parroquia San Antonio de Padua"
          className="location-image"
        />
      </div>
      <p className="location-address">
        Parroquia San Antonio de Padua<br />
        Belén 2, Zona Centro, 98100 Morelos, Zacatecas <br />
        26 de Julio de 2025
      </p>
      {/* Botón para abrir Google Maps */}
      <div className="location-button-container">
        <a
          href="https://www.google.com/maps/place/Parroquia+San+Antonio+de+Padua/@22.8621504,-102.6107111,18z/data=!4m6!3m5!1s0x86824d4fe389d1cb:0xf72ee9b45a630470!8m2!3d22.8619675!4d-102.6107621!16s%2Fg%2F1tj530hr?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          Ver en Maps
        </a>
      </div>
    </section>
  );
};

export default EventLocationI;

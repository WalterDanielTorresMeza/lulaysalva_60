
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
          src="/ig.jpg"
          alt="Parroquia San Antonio de Padua"
          className="location-image"
        />
      </div>
      <p className="location-address">
        Parroquia San Antonio de Padua<br />
        Av San Antonio 70, Zona Centro, 98100 Morelos, Zacatecas <br />
      </p>
      {/* Botón para abrir Google Maps */}
      <div className="location-button-container">
        <a
          href="https://www.google.com/maps/place/San+Antonio+70,+Zona+Centro,+98100+Morelos,+Zac./@22.8616671,-102.6114609,19z/data=!3m1!4b1!4m6!3m5!1s0x86824d5b2fdfc25f:0xddb543f886a76d40!8m2!3d22.8616671!4d-102.6108158!16s%2Fg%2F11c2w5z621?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
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

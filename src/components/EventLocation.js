import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './EventLocation.css';

const EventLocation = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <section className="event-location" data-aos="fade-up">
      <h2 className="location-title">Lugar del Evento</h2>
      {/* Imagen del lugar */}
      <div className="location-image-container">
        <img
          src="/quinta.jpg"
          alt="Salón Estrella Dorada"
          className="location-image"
        />
      </div>
      <p className="location-address">
        Quinta de Leonarda<br />
        Priv. San José 111, Morelos, Zacatecas <br />
        26 de Julio de 2025
      </p>
      {/* Botón para abrir Google Maps */}
      <div className="location-button-container">
        <a
          href="https://www.google.com/maps/place/Quinta+de+Leonarda/@22.8642751,-102.6087338,17z/data=!3m1!4b1!4m6!3m5!1s0x86824dab1c6c6bc3:0x534011502e8387bd!8m2!3d22.8642702!4d-102.6061589!16s%2Fg%2F11hz9cyytg?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
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

export default EventLocation;
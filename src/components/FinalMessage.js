import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FinalMessage.css';

const FinalMessage = () => {
  // Inicializa animaciones AOS
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <section className="final-message" data-aos="fade-up">
      <h2 className="final-title"> </h2>
      <p className="final-text">
        "Gracias por formar parte de nuestra historia de vida."<br/>
         Con cariño, Lula y Salva
      </p>

    </section>
  );
};

export default FinalMessage;
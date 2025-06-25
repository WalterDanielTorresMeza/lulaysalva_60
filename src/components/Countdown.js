import React, { useState, useEffect, useCallback } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  // useCallback para estabilizar la función
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null; // ya llegó el día del evento
    return {
      Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutos: Math.floor((difference / 1000 / 60) % 60),
      Segundos: Math.floor((difference / 1000) % 60)
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Si ya es el día del evento, muestra mensaje especial
  if (timeLeft === null) {
    return (
      <section className="countdown">
        <h2 className="countdown-title">¡Hoy es el día de la celebración!</h2>
      </section>
    );
  }

  // Mientras no sea el día, muestra el contador regresivo
  return (
    <section className="countdown">
    <h2 className="countdown-title">Sabado 26 de Julio 2025</h2>
      <h2 className="countdown-title">Faltan</h2>
      <div className="countdown-box">
        {Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="countdown-item">
            <span className="countdown-value">{value}</span>
            <span className="countdown-label">{interval}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;

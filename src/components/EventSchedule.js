import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './EventSchedule.css';

const events = [
  {
    time: '3:15PM',
    title: 'Misa',
    details:
      ' '
  },
  {
    time: '4:30 - 5:00 PM',
    title: 'Recepción',
    details:
      'Bienvenida con música suave para iniciar la celebración.'
  },
  {
    time: '5:00 - 6:00 PM',
    title: 'Comida',
    details: 'Platillos tradicionales'
  },
  {
    time: '7:00 PM',
    title: 'Baile',
    details: 'Pista de baile para todos.'
  }
];

const EventSchedule = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  return (
    <section className="event-schedule" data-aos="fade-up">
      <h2 className="schedule-header">Programa del Evento</h2>
      <div className="schedule-accordion">
        {events.map((evt, idx) => (
          <details key={idx} className="schedule-item">
            <summary className="schedule-summary">
              <span className="schedule-time">{evt.time}</span>
              <span className="schedule-title">{evt.title}</span>
            </summary>
            <p className="schedule-details">{evt.details}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default EventSchedule;

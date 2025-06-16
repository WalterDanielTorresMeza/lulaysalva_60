// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <img
      src="/df.png"
      alt="Pixel y Papel"
      className="footer-logo"
    />
    <p className="footer-text">
      © {new Date().getFullYear()}  Todos los derechos reservados.
    </p>
  </footer>
);

export default Footer;

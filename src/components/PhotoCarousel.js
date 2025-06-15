import React from 'react';
import Slider from 'react-slick';

// Importa los estilos de Slick antes de tu CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './PhotoCarousel.css';

const PhotoCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,       // muestra 1 slide a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Momentos que perduran</h2>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-slide">
            <img src={src} alt={`Foto ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PhotoCarousel;

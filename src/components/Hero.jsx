import React from 'react';
import { MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting text-mono text-accent">Hi, my name is</p>
          <h1 className="hero-name">Santo Kabir Ahmed.</h1>
          <h2 className="hero-subtitle">Bridging geospatial technology and water science for sustainable environmental management.</h2>
          
          <p className="hero-description">
            I'm a Soil, Water, and Environment postgraduate candidate specializing in GIS and environmental modeling to develop sustainable water resource strategies.
          </p>
          
          <div className="hero-location text-mono">
            <MapPin size={16} /> Dhaka, Bangladesh
          </div>

          <div className="hero-cta">
            <a href={`${import.meta.env.BASE_URL}Santo_Kabir_Ahmed_CV.pdf`} target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn">
              My Resume
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="hero-image-overlay"></div>
            <img src={`${import.meta.env.BASE_URL}PP.jpg`} alt="Santo Kabir Ahmed" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

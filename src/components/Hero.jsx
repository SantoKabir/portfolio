import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting text-mono text-accent">Hi, my name is</p>
          <h1 className="hero-name">Santo Kabir Ahmed.</h1>
          <h2 className="hero-subtitle">I build environmental solutions.</h2>
          
          <p className="hero-description">
            I'm a Soil, Water, and Environment postgraduate candidate with a proven track record in managing field surveys, laboratory analysis, and digital storytelling for environmental advocacy. 
          </p>
          
          <div className="hero-location text-mono">
            <MapPin size={16} /> Dhaka, Bangladesh
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary hero-btn">
              Check out my work <ArrowRight size={18} />
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

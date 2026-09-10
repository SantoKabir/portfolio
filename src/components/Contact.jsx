import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="contact-wrapper">
        <p className="contact-overline text-mono text-accent">05. What's Next?</p>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently looking for opportunities for advanced academic research and environmental projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-info">
          <a href="mailto:santoahmed01@gmail.com" className="contact-item glass-panel">
            <Mail size={24} className="text-accent" />
            <div>
              <h4>Email</h4>
              <p>santoahmed01@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:+8801909146901" className="contact-item glass-panel">
            <Phone size={24} className="text-accent" />
            <div>
              <h4>Phone</h4>
              <p>+880-1909-146-901</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/santo-kabir-ahmed" target="_blank" rel="noopener noreferrer" className="contact-item glass-panel">
            <FaLinkedin size={24} className="text-accent" />
            <div>
              <h4>LinkedIn</h4>
              <p>santo-kabir-ahmed</p>
            </div>
          </a>
        </div>
        
        <a href="mailto:santoahmed01@gmail.com" className="btn-primary say-hello-btn">
          Say Hello
        </a>
      </div>
      
      <footer className="footer text-mono text-secondary">
        <p>Built with React & Vite.</p>
        <p>Santo Kabir Ahmed © 2026</p>
      </footer>
    </section>
  );
};

export default Contact;

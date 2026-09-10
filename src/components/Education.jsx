import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'University of Dhaka',
      degree: 'BSc in Soil, Water and Environment',
      score: 'CGPA 3.82/4.00',
      year: '2026',
      logo: 'Dhaka-University-Logo.png',
      links: [
        { name: '1st Year Result', url: 'http://result.du.ac.bd/?MTc3OHwyMDIwNjE3MTkyfDg3MDYz' },
        { name: '2nd Year Result', url: 'http://result.du.ac.bd/?MjYxNnwyMDIwNjE3MTkyfDEzMzk1NA==' },
        { name: '3rd Year Result', url: 'http://result.du.ac.bd/?MzcxOHwyMDIwNjE3MTkyfDIzMjk5NTQ=' },
        { name: '4th Year Result', url: 'http://result.du.ac.bd/?NDk4OHwyMDIwNjE3MTkyfDI0MjQ0MTU=' }
      ]
    },
    {
      institution: 'Notre Dame College',
      degree: 'HSC',
      score: 'GPA 5.00',
      year: '2020',
      logo: 'Notre_Dame.png'
    },
    {
      institution: 'Monipur High School and College',
      degree: 'SSC',
      score: 'GPA 5.00',
      year: '2018',
      logo: 'Monipur School.png'
    }
  ];

  return (
    <section id="education" className="section container">
      <h2 className="section-title">
        <span className="text-mono text-accent" style={{marginRight: '10px'}}>02.</span> 
        Education
      </h2>
      
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card glass-panel" key={index}>
            <div className="education-header">
              <img 
                src={`${import.meta.env.BASE_URL}${edu.logo}`} 
                alt={`${edu.institution} logo`} 
                className="education-logo"
              />
              <div className="education-info">
                <h3 className="institution-name">{edu.institution}</h3>
                <p className="degree text-accent">{edu.degree}</p>
                <div className="education-meta text-mono text-secondary">
                  <span>{edu.score}</span>
                  <span className="year">{edu.year}</span>
                </div>
                {edu.links && (
                  <div className="education-links">
                    {edu.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="education-link text-mono"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

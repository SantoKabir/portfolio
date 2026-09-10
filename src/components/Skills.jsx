import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Science & Software',
      skills: ['R Programming', 'Python', 'Microsoft Excel']
    },
    {
      title: 'Geospatial Analysis',
      skills: ['QGIS', 'ArcGIS Online', 'ArcGIS Pro']
    },
    {
      title: 'Analytical Chemistry',
      skills: ['Atomic Absorption Spectroscopy (AAS)', 'Nitrogen species analysis', 'Organic Carbon analysis']
    },
    {
      title: 'Environmental Analysis',
      skills: ['Water & Soil Sampling', 'Greenhouse Gas Sampling', 'Soil chemistry']
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">
        <span className="text-mono text-accent" style={{marginRight: '10px'}}>04.</span> 
        Technical Skills & Expertise
      </h2>
      
      <div className="skills-content">
        <div className="skills-description">
          <p>
            I have developed a comprehensive skill set bridging environmental science, analytical chemistry, and modern data analysis.
          </p>
          <p>
            Here are a few technologies and tools I've been working with recently:
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category glass-panel" key={index}>
              <h3 className="category-title text-accent text-mono">{category.title}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="publications-section mt-50">
        <h3 className="sub-title">Publications</h3>
        <div className="publication-card glass-panel">
          <img 
            src={`${import.meta.env.BASE_URL}publication_preview.png`} 
            alt="Graphical Abstract of the Publication" 
            className="pub-preview-img" 
          />
          <div className="pub-content">
            <p className="pub-authors">
              Chamon, A. S., Parash, M. A. H., Fahad, J. I., Hassan, S. M. N., <strong>Ahmed, S. K.</strong>, et al. (2024).
            </p>
            <h4 className="pub-title">
              Heavy metals in dates (Phoenix dactylifera L.) collected from Medina and Dhaka City markets, and assessment of human health risk.
            </h4>
            <p className="pub-journal">Environmental Systems Research, 13, 27. (Q1 Journal)</p>
            <a href="https://doi.org/10.1186/s40068-024-00354-7" target="_blank" rel="noopener noreferrer" className="pub-link text-accent text-mono">
              View Publication
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

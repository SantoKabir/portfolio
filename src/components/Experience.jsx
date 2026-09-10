import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: 'Project Lead',
      company: 'National Geographic Society',
      duration: 'Dec 2025 – May 2026',
      description: [
        'Spearheaded a National Geographic Society SEED-funded initiative to assess the impact of industrial discharge on 100+ downstream farming families.',
        'Directed a dedicated team of over 20 volunteers, orchestrating a comprehensive community health survey of 56 residents to map correlations with contaminated river water usage.',
        'Executed rigorous field sampling of soil, groundwater, and surface water across multiple sites to quantify the extent of heavy metal industrial pollution.',
        'Developed and delivered targeted environmental education programs, including interactive awareness campaigns and art competitions engaging students across two local schools.',
        'Designed and distributed high-impact visual media—including posters and a comprehensive informative booklet—to drive widespread community knowledge dissemination and climate resilience.'
      ],
      docs: [
        { name: 'Extern Experience Letter', file: 'Extern_Experience_Letter.pdf' }
      ]
    },
    {
      role: 'Research Assistant',
      company: 'Bangladesh Agricultural University',
      duration: 'June 2026 – Present',
      description: [
        'Learned to operate various laboratory devices (spectrophotometer, multiparameter etc.).',
        'Learned and utilized various wet lab analytical methods for soil and water sample analysis (Kjeldahl Method for Nitrogen, Wet-oxidation method for Carbon etc.).',
        'Learned and participated in soil, water and gas (using gas chambers) sample collection from soil and water bodies.',
        'Applied R programming for data analysis and visualization of soil, crop and water parameters.',
        'Applied GIS for geospatial data analysis.'
      ],
      docs: [
        { name: 'RA Appointment Letter', file: 'RA_Appointment_Letter.pdf' }
      ]
    },
    {
      role: 'Extern',
      company: 'NGS & The Nature Conservancy',
      duration: 'July 2025 – Sep 2025',
      description: [
        'Developed the "Two Rivers, One Poison" ArcGIS StoryMap, integrating geospatial data with human-interest narratives to visualize the footprint of industrial pollution.',
        'Conducted in-person field survey of the site of interest and interviews of local people for first-hand reliable data.',
        'Collected, synthesized, and visualized a wide range of data using GIS software to enhance public understanding of environmental impacts.',
        'Synthesized complex GIS layers into accessible, high-impact digital content.'
      ],
      docs: [
        { name: 'Externship Certificate', file: 'https://www.credential.net/4ee77932-a76a-4ffe-a063-ba0f172121bc' }
      ]
    },
    {
      role: 'Undergraduate Researcher',
      company: 'University of Dhaka',
      duration: '2023 – 2024',
      description: [
        'Assisted in the analysis of food samples for heavy metal presence using standard laboratory protocols.',
        'Maintained detailed, accurate documentation of experimental procedures and results for ongoing research projects.',
        'Took a major part in writing and editing the manuscript for publication.'
      ],
      docs: [
        { name: 'View Publication', file: 'https://doi.org/10.1186/s40068-024-00354-7' }
      ]
    }
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">
        <span className="text-mono text-accent" style={{marginRight: '10px'}}>01.</span> 
        My Experience
      </h2>
      
      <div className="experience-container">
        <div className="experience-tabs">
          {experiences.map((exp, index) => (
            <button 
              key={index} 
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.role === 'Extern' ? 'National Geographic Externship' : exp.role}
            </button>
          ))}
          <div 
            className="tab-highlight" 
            style={{ transform: `translateY(${activeTab * 50}px)` }}
          ></div>
        </div>
        
        <div className="experience-content glass-panel">
          <h3>
            <span className="role">{experiences[activeTab].role}</span>
            <span className="company text-accent"> @ {experiences[activeTab].company}</span>
          </h3>
          <p className="duration text-mono">{experiences[activeTab].duration}</p>
          
          <ul className="description-list">
            {experiences[activeTab].description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {experiences[activeTab].docs && (
            <div className="experience-docs">
              {experiences[activeTab].docs.map((doc, i) => (
                <a 
                  key={i}
                  href={doc.file.startsWith('http') ? doc.file : `${import.meta.env.BASE_URL}${doc.file}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="doc-link"
                >
                  <FileText size={16} />
                  <span>{doc.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useState } from 'react';
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
      ]
    }
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Where I've Worked</h2>
      
      <div className="experience-container">
        <div className="experience-tabs">
          {experiences.map((exp, index) => (
            <button 
              key={index} 
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company === 'National Geographic Society' ? 'NGS Project' : 
               exp.company === 'Bangladesh Agricultural University' ? 'BAU' :
               exp.company === 'NGS & The Nature Conservancy' ? 'Externship' : 'DU Research'}
            </button>
          ))}
          <div 
            className="tab-highlight" 
            style={{ transform: `translateY(${activeTab * 42}px)` }}
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
        </div>
      </div>
    </section>
  );
};

export default Experience;

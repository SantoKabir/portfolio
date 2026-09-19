import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState([]);

  const toggleExp = (index) => {
    if (expandedExp.includes(index)) {
      setExpandedExp(expandedExp.filter(i => i !== index));
    } else {
      setExpandedExp([...expandedExp, index]);
    }
  };

  const experiences = [
    {
      role: 'Research Assistant',
      company: 'Bangladesh Agricultural University',
      duration: 'June 2026 – Present',
      image: 'Research_Assistant.jpg',
      summary: 'Conducted rigorous wet lab analysis and field sampling of soil, water, and gas parameters, utilizing R programming and GIS to analyze and visualize geospatial and agricultural data for environmental research.',
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
      role: 'Project Lead',
      company: 'National Geographic Society',
      duration: 'Dec 2025 – May 2026',
      image: 'Project_Lead.jpg',
      summary: 'Spearheaded a National Geographic Society SEED-funded initiative to assess the impact of industrial discharge on 100+ downstream farming families, directing a team of 20+ volunteers to conduct comprehensive health and environmental surveys, and executing targeted awareness campaigns for climate resilience.',
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
      role: 'Extern',
      company: 'NGS & The Nature Conservancy',
      duration: 'July 2025 – Sep 2025',
      image: 'Extern.jpg',
      summary: 'Developed the "Two Rivers, One Poison" ArcGIS StoryMap by conducting field surveys, synthesizing complex GIS layers, and integrating human-interest narratives to visualize and communicate the footprint of industrial pollution.',
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
      image: 'Undergrad_Researcher.jpg',
      summary: 'Assisted in heavy metal analysis of food samples and maintained rigorous experimental documentation, playing a major role in drafting and editing a research manuscript for publication.',
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
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className={`experience-item ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
            <div className="exp-image-column">
              <div className="image-accent-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL}${exp.image}`} 
                  alt={exp.company} 
                  loading="lazy" 
                  decoding="async" 
                />
              </div>
            </div>
            
            <div className="exp-content-column">
              <div className="exp-role">{exp.role.toUpperCase()}</div>
              <h3 className="exp-company">{exp.company}</h3>
              
              <div className="mobile-duration text-mono">
                <span className="meta-value">{exp.duration}</span>
              </div>
              
              <div className="exp-description-container">
                {!expandedExp.includes(index) ? (
                  <p className="exp-summary">{exp.summary}</p>
                ) : (
                  <ul className="description-list">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                
                <button 
                  className="read-more-btn text-mono" 
                  onClick={() => toggleExp(index)}
                >
                  {expandedExp.includes(index) ? '- Read Less' : '+ Read More'}
                </button>
              </div>

              {exp.docs && (
                <div className="experience-docs-editorial">
                  {exp.docs.map((doc, i) => (
                    <a 
                      key={i}
                      href={doc.file.startsWith('http') ? doc.file : `${import.meta.env.BASE_URL}${doc.file}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="doc-link-editorial"
                    >
                      {doc.name.toUpperCase()} <span className="arrow">→</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="exp-meta-column text-mono">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{exp.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Dhaleshwari River Pollution Awareness',
      description: 'A National Geographic Society SEED-funded initiative to assess the impact of industrial discharge on downstream farming families. Conducted comprehensive community surveys and collected samples for heavy metal assessment.',
      image: `${import.meta.env.BASE_URL}DRPA.jpg`,
      tags: ['Environmental Advocacy', 'GIS Mapping', 'Field Survey', 'Community Leadership'],
      links: {
        external: 'https://arcg.is/1H9Xy12'
      }
    },
    {
      title: 'Two Rivers, One Poison',
      description: 'An ArcGIS StoryMap developed during my NGS & The Nature Conservancy externship. It integrates geospatial data with human-interest narratives to visualize the footprint of industrial pollution from the Tannery Industrial Estate.',
      image: `${import.meta.env.BASE_URL}Externship.jpg`,
      tags: ['ArcGIS', 'Digital Storytelling', 'Geospatial Analysis', 'Data Visualization'],
      links: {
        external: 'https://arcg.is/1OGOCi1'
      }
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Some Things I've Built</h2>
      
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <a href={project.links.external} target="_blank" rel="noopener noreferrer">
                <div className="image-overlay"></div>
                <img src={project.image} alt={project.title} />
              </a>
            </div>
            
            <div className="project-content">
              <p className="project-overline text-mono text-accent">Featured Project</p>
              <h3 className="project-title">
                <a href={project.links.external} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              
              <div className="project-description glass-panel">
                <p>{project.description}</p>
              </div>
              
              <ul className="project-tech-list text-mono">
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
              
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.links.external && (
                  <a href={project.links.external} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

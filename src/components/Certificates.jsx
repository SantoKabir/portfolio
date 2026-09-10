import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'NGS + TNC EXTERNSHIP',
      org: 'National Geographic Society',
      date: 'Sep 2025',
      description: 'Freshwater and Community Conservation Externship.',
      file: 'NGS_TNC_Externship_Certificate.png',
      image: 'NGS_TNC_Externship_Certificate.png',
      externalLink: 'https://www.credential.net/4ee77932-a76a-4ffe-a063-ba0f172121bc',
      type: 'image'
    },
    {
      title: 'IELTS ACADEMIC',
      org: 'British Council',
      date: 'Dec 2025',
      description: 'Achieved an overall band score of 8.00.',
      file: 'Santo_Kabir_Ahmed_IELTS.pdf',
      image: 'IELTS_preview.png',
      type: 'pdf'
    },
    {
      title: 'PYTHON PROGRAMMING',
      org: 'University of Helsinki',
      date: 'Feb 2026',
      description: 'Advanced Python Programming certification.',
      file: 'Santo_Kabir_Python.png',
      image: 'Santo_Kabir_Python.png',
      externalLink: 'https://certificates.mooc.fi/validate/q68xdaegps8',
      type: 'image'
    },
    {
      title: 'ARCGIS PRO CERTIFICATE',
      org: 'Esri',
      date: 'Feb 2026',
      description: 'Certification in ArcGIS Pro geospatial software.',
      file: 'ArcGIS Pro Certificate.pdf',
      image: 'ArcGIS_Pro_Certificate.png',
      type: 'pdf'
    },
    {
      title: 'NPU STUDENT AMBASSADOR',
      org: 'Nature Positive Universities',
      date: 'Aug 2025',
      description: 'Student Ambassador and Communications Team member.',
      file: 'NPU Student Ambassador Certificate - Santo Kabir Ahmed.pdf',
      image: 'NPU_Student_Ambassador.png',
      type: 'pdf'
    },
    {
      title: 'YOUTH FOR EARTH',
      org: 'Ministry of Youth & Sports',
      date: 'Feb 2025',
      description: '2nd Runner-Up in the Youth for Earth Case Solving Competition.',
      file: 'Youth for Earth.jpg',
      image: 'Youth for Earth.jpg',
      type: 'image'
    }
  ];

  return (
    <section id="certificates" className="section container">
      <h2 className="section-title">
        <span className="text-mono text-accent" style={{marginRight: '10px'}}>05.</span> 
        Certifications & Awards
      </h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a 
            key={index} 
            href={cert.externalLink ? cert.externalLink : `${import.meta.env.BASE_URL}${cert.file}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <div className="cert-image-container">
              <img src={`${import.meta.env.BASE_URL}${cert.image}`} alt={cert.title} />
            </div>
            
            <div className="cert-content">
              <div className="cert-meta text-mono">
                <span className="cert-org">{cert.org}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>
              
              <span className="cert-verify-link text-mono">
                Verify <ExternalLink size={14} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

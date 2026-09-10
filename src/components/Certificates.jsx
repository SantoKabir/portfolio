import React from 'react';
import { ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Youth for Earth (2nd Runner-Up)',
      file: 'Youth for Earth.jpg',
      type: 'image'
    },
    {
      title: 'Python Programming',
      file: 'Santo_Kabir_Python.png',
      type: 'image'
    },
    {
      title: 'ArcGIS Pro Certificate',
      file: 'ArcGIS Pro Certificate.pdf',
      type: 'pdf'
    },
    {
      title: 'NGS + TNC Externship',
      file: 'NGS+TNC Externship Certificate.png',
      type: 'image'
    },
    {
      title: 'NPU Student Ambassador',
      file: 'NPU Student Ambassador Certificate - Santo Kabir Ahmed.pdf',
      type: 'pdf'
    },
    {
      title: 'IELTS Score (8.00)',
      file: 'Santo_Kabir_Ahmed_IELTS.pdf',
      type: 'pdf'
    }
  ];

  return (
    <section id="certificates" className="section container">
      <h2 className="section-title">Certifications & Awards</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a 
            key={index}
            href={`${import.meta.env.BASE_URL}${cert.file}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="certificate-card glass-panel"
          >
            <div className="cert-icon text-accent">
              {cert.type === 'pdf' ? <FileText size={40} /> : <ImageIcon size={40} />}
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <div className="cert-link text-mono text-accent">
              View Document <ExternalLink size={16} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

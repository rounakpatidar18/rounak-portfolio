import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProjectShow.css';
import projects from '../../data/projects';
import { motion } from 'framer-motion';

export default function ProjectShow() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const navigate = useNavigate();

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2>Project not found</h2>
          <p className="lead">The project you are looking for does not exist.</p>
          <button className="btn" onClick={() => navigate('/projects')}>Back to Projects</button>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="project-show card">
            <img src={project.image} alt={project.alt} className="responsive-img" loading="lazy" />
            <div className="project-show__body">
              <h1 className="h1">{project.title}</h1>
              <p className="lead">{project.longDescription}</p>
              <div className="project-show__actions">
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn btn--primary">View Source</a>
                <Link to="/rounak_patidar-portfolio/projects" className="btn btn--ghost">Back</Link>
              </div>
              <div className="project-show__tags"><strong>Tags: </strong>{project.tags.join(', ')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

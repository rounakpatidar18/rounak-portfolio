import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.article className="project card" layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <div className="project__img">
        <img src={project.image} alt={project.alt} loading="lazy" className="responsive-img" />
      </div>
      <div className="project__content">
        <h3 className="project__title">{project.title}</h3>
        <p className="lead project__desc">{project.description}</p>
        <div className="project__meta">
          <Link to={`/projects/${project.id}`} className="btn">View</Link>
          <div className="tags">{project.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
        </div>
      </div>
    </motion.article>
  );
}

export default React.memo(ProjectCard);

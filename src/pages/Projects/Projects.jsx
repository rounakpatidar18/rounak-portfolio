import React from 'react';
import './Projects.css';
import projects from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Projects</h2>
        <p className="lead">Selected projects — click View to open the project page.</p>
        <div className="projects-grid">{projects.map(p => <ProjectCard key={p.id} project={p} />)}</div>
      </div>
    </section>
  );
}

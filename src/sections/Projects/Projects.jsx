import React from 'react';

import Project from './Project';
import projects from './data';

import './Projects.css';

function Projects() {
  return (
    <section className="Projects">
      <h3>Projects</h3>
      { projects.map((project) => (
        <Project key={project.id} data={project} />
      )) }
    </section>
  );
}

export default Projects;

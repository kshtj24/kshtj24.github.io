import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project A', description: 'A web application for managing tasks.' },
    { name: 'Project B', description: 'A mobile app for tracking fitness activities.' }
  ];

  return (
    <div className="page">
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
import React from 'react';

const GitHubWork = () => {
  const repositories = [
    { name: 'Portfolio Website', url: 'https://github.com/kshtj24/portfolio-website', description: 'A personal portfolio website built with React.' },
    { name: 'Task Manager', url: 'https://github.com/kshtj24/task-manager', description: 'A task management app with Node.js and MongoDB.' },
    { name: 'Weather App', url: 'https://github.com/kshtj24/weather-app', description: 'A weather forecasting app using OpenWeatherMap API.' }
  ];

  return (
    <div className="page">
      <h1>My GitHub Work</h1>
      <ul>
        {repositories.map((repo, index) => (
          <li key={index}>
            <h2><a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h2>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubWork;
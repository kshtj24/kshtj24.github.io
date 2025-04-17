import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp',
      role: 'Software Engineer',
      duration: 'Jan 2020 - Dec 2022',
      description: 'Developed and maintained web applications using React and Node.js.'
    },
    {
      company: 'Innovate Solutions',
      role: 'Frontend Developer',
      duration: 'Mar 2018 - Dec 2019',
      description: 'Created responsive UI components and optimized performance for web platforms.'
    }
  ];

  return (
    <div className="page">
      <div>
        <h1>Work Experience</h1>
        <ul>
          {experiences.map((exp, index) => (
            <li key={index}>
              <h2>{exp.company}</h2>
              <p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
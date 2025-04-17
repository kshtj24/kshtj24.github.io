import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

  return (
    <div className="page">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
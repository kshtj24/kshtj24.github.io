import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/github-work">GitHub Work</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
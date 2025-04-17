import React from 'react';
import profilePic from '../assets/dummy-profile-pic.jpg';

const Home = () => {
  return (
    <div className="page">
      <div>
        <h1>Welcome to My Portfolio</h1>
        <img src={profilePic} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
        <p>This is the home page where you can learn more about me and my work.</p>
      </div>
    </div>
  );
};

export default Home;
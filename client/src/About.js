import React from 'react';
import CEOsMessage from './CEOsMessage';
import './styles.css'; 


const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <h3>Vision Statement</h3>
      <p>
        At Cyberonic SEOS, our vision is to empower individuals through cutting-edge education, preparing them to thrive in a fast-changing technological world.
      </p>
      <CEOsMessage />
      <h3>Mission Statement</h3>
      <p>
        Our mission is to deliver comprehensive, hands-on learning experiences that equip students with the skills needed for success in today's digital economy.
      </p>
      <h3>Contact Us</h3>
      <p>Email: info@cyberonicseos.com</p>
    </div>
  );
};

export default About;

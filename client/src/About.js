import React from 'react';
import CEOsMessage from './CEOsMessage';
import './styles.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>

      {/* CEO's Message */}
      <CEOsMessage />

      {/* Vision and Mission */}
      <div className="vision-mission">
        <div className="vision-statement">
          <h3>Vision Statement</h3>
          <p>
            At Cyberonic SEOS, our vision is to empower individuals through cutting-edge education, preparing them to thrive in a fast-changing technological world.
          </p>
        </div>
        <div className="mission-statement">
          <h3>Mission Statement</h3>
          <p>
            Our mission is to deliver comprehensive, hands-on learning experiences that equip students with the skills needed for success in today's digital economy.
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>Email: info@cyberonicseos.com</p>
        <p>Phone: 03334080016</p>
      </div>
    </div>
  );
};

export default About;

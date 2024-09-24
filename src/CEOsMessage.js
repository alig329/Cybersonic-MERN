// CEOsMessage.js
import React from 'react';
import './styles.css'; // Ensure your styles are consistent

const CEOsMessage = () => {
  return (
    <div className="ceo-message">
      <div className="ceo-image-placeholder">
      <img src="/CEOs.jpg" alt="CEO" className="ceo-image" />
      </div>
      <div className="ceo-text">
        <h2>CEO's Message</h2>
        <p>
          Welcome to Cyberonic SEOS! At Cyberonic SEOS, we are dedicated to shaping the future of technology by providing high-quality education and training in fields such as web development, networking, programming, software engineering, and digital marketing. Our mission is to equip students with practical knowledge and hands-on experience, ensuring they are ready to meet the demands of the ever-evolving IT landscape.
        </p>
      </div>
    </div>
  );
};

export default CEOsMessage;

// App.js
import React from 'react';
import './styles.css'; // Ensure to import the CSS file

const programs = [
  {
    title: 'Computer Programming',
    description: 'Learn the fundamentals of computer programming and various programming languages.',
    imageUrl: '/compro.jpg' // Replace with actual image path
  },
  {
    title: 'Web Development',
    description: 'Master front-end and back-end web development skills.',
    imageUrl: '/webdev.jpg' // Replace with actual image path
  },
  {
    title: 'Networking',
    description: 'Understand the essentials of computer networks and network management.',
    imageUrl: '/network.jpg' // Replace with actual image path
  },
  {
    title: 'Software Engineering',
    description: 'Explore software design, development methodologies, and project management.',
    imageUrl: '/softeng.jpg' // Replace with actual image path
  }
];

const App = () => {
  return (
    <div>
      <header className="header">
        <h1>Cyberonic SEOs</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#signin">Sign In</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="cards">
          {programs.map((program, index) => (
            <div className="card" key={index}>
              <img src={program.imageUrl} alt={program.title} />
              <h2>{program.title}</h2>
              <p>{program.description}</p>
              <button>Browse</button>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Cyberonic SEOs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

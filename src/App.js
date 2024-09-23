import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './styles.css'; 
import SignIn from './SignIn'; 
import SignUp from './SignUp'; 

const programs = [
  {
    title: 'Computer Programming',
    description: 'Learn the fundamentals of computer programming and various programming languages.',
    imageUrl: '/compro.jpg'
  },
  {
    title: 'Web Development',
    description: 'Master front-end and back-end web development skills.',
    imageUrl: '/webdev.jpg'
  },
  {
    title: 'Networking',
    description: 'Understand the essentials of computer networks and network management.',
    imageUrl: '/network.jpg'
  },
  {
    title: 'Software Engineering',
    description: 'Explore software design, development methodologies, and project management.',
    imageUrl: '/softeng.jpg'
  }
];

const App = () => {
  return (
    <Router>
      <div>
        <header className="header">
          <h1>Cyberonic SEOS</h1>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Courses</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <div className="container">
              <div className="cards">
                {programs.map((program, index) => (
                  <div className="card" key={index}>
                    <img src={program.imageUrl} alt={program.title} />
                    <h2>{program.title}</h2>
                    <p>{program.description}</p>
                    <button>View Course Details</button>
                  </div>
                ))}
              </div>
            </div>
          } />
        </Routes>

        <footer className="footer">
          <p>&copy; 2024 Cyberonic SEOS. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

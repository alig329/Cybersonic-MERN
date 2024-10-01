import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'; 
import SignIn from './SignIn'; 
import SignUp from './SignUp'; 
import Services from './Services';
import About from './About';
import Navbar from './navbar';
import Footer from './footer';


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
        <Navbar/>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About/>} />
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

        <Footer/>
      </div>
    </Router>
  );
};

export default App;

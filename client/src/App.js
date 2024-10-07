// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css'; 
import SignIn from './SignIn'; 
import SignUp from './SignUp'; 
import Services from './Services';
import About from './About';
import Navbar from './navbar';
import Footer from './footer';
import ApplyForm from './ApplyForm';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const programs = [
  {
    title: 'Full-Stack Web Development',
    description: 'Master Full-Stack web development using different programming languages and frameworks.',
    imageUrl: '/compro.jpg'
  },
  {
    title: 'IELTS/Spoken English',
    description: 'Enhance your communication skills for IELTS and spoken English proficiency.',
    imageUrl: '/ielts.jpg'
  },
  {
    title: 'Networking',
    description: 'Understand the essentials of computer networks and network management.',
    imageUrl: '/network.jpg'
  },
  {
    title: 'Cybersecurity',
    description: 'Learn Cybersecurity to safeguard systems, networks, and data against digital attacks and unauthorized access.',
    imageUrl: '/softeng.jpg'
  }
];

const cards = [
  {
    title: 'Computer Programming',
    description: 'Learn the fundamentals of computer programming and various programming languages.',
    imageUrl: '/compro.jpg'
},
{
  title: 'SEO and Digital Marketing',
    description: 'Learn effective strategies for SEO and digital marketing to boost online visibility.',
    imageUrl: '/seo.jpg'
},
{
  title: 'Graphic Designing and Video Editing',
    description: 'Create stunning visuals and captivating videos using industry-standard tools and techniques.',
    imageUrl: '/graphic.jpg'
},
{
  title: 'Amazone VA',
    description: 'Learn essential skills to efficiently manage Amazon accounts and optimize sales performance.',
    imageUrl: '/va.jpg'
},
{
  title: 'Python Web Developer', 
    description: 'Gain expertise in building dynamic web applications using Python and related frameworks.',
    imageUrl: '/python.jpg'
},
  
  {
    title: 'Cybersecurity',
    description: 'Learn Cybersecurity to safeguard systems, networks, and data against digital attacks and unauthorized access.',
    imageUrl: '/softeng.jpg'
  }
]

const App = () => {
  const [autoPlay, setAutoPlay] = useState(true); // State to manage autoplay


  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply/:course" element={<ApplyForm />} />
          <Route path="/" element={
            <div className="container">
              {/* Carousel wrapper */}
              <Carousel
                showThumbs={false} // Hide the small thumbnails below the carousel
                showStatus={false} // Hide the slide number status
                infiniteLoop
                autoPlay={autoPlay} // Control autoplay based on state
                interval={3000} // 3 seconds delay between slides
                stopOnHover={false} // Prevent carousel from stopping on hover
              >
                {programs.map((program, index) => (
  <div key={index} className="carousel-slide">
    <img src={program.imageUrl} alt={program.title} className="carousel-image" />
    <div className="carousel-content">
      <h2>{program.title}</h2>
      <p>{program.description}</p>
      <button 
        onMouseEnter={() => setAutoPlay(false)} 
        onMouseLeave={() => setAutoPlay(true)} 
      >
        <Link to={`/apply/${program.title}`} className="btn btn-primary">Apply</Link>
      </button> {/* Stop autoplay when hovered and resume when unhovered */}
    </div>
  </div>
))}

</Carousel>

              {/* Grid of Cards below the carousel */}
              <h2>Our Courses</h2>
              <div className="course-grid">
                {cards.map((card, index) => (
                  <div className="course-card" key={index}>
                    <img src={card.imageUrl} alt={card.title} className="course-image" />
                    <div className="course-content">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <button><Link to={`/apply/${card.title}`} className="btn btn-primary">Apply</Link></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
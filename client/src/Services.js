import React from 'react';
import { Link } from 'react-router-dom';  
import './styles.css'; 

const servicesData = {
  business: [
    'Web Development',
    'SEO Ranking',
    'Social Media Marketing',
    'Graphics and Product Designing',
  ],
  trainings: {
    online: [
      { title: 'Front-end Web Development',
        description: 'Learn to design responsive websites.',
        imageUrl: '/frontweb.jpg' }
    ],
    onsite: [
      { title: 'Full Stack Web Development (MERN)',
        description: 'Learn to build full-stack applications using the MERN stack.',
        imageUrl: '/mern.jpg' },
      { title: 'Full Stack Web Development (Wordpress)',
        description: 'Master WordPress for building dynamic websites.',
        imageUrl: '/wpdev.jpg' }
    ],
  }
};

const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      
      <h3>Business Services</h3>
      <ul>
        {servicesData.business.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      
      <h3>Trainings - Online Courses</h3>
      <div className="cards">
        {servicesData.trainings.online.map((course, index) => (
          <div className="card" key={index}>
            <img src={course.imageUrl} alt={course.title} />
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <Link to={`/apply/${course.title}`} className="btn btn-primary">Apply</Link>
          </div>
        ))}
      </div>

      <h3>Trainings - Onsite Courses</h3>
      <div className="cards">
        {servicesData.trainings.onsite.map((course, index) => (
          <div className="card" key={index}>
            <img src={course.imageUrl} alt={course.title} />
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <Link to={`/apply/${course.title}`} className="btn btn-primary">Apply</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

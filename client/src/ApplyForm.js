import React, { useState } from 'react';
import './styles.css'; 

const ApplyForm = ({ course }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    degree: 'Matric',
    courseApplyingFor: course || 'Full Stack Web Development',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="container mt-5 border border-primary p-4">
      <h2>Apply for {course}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Recent Degree:</label>
          <select
            name="degree"
            className="form-control"
            value={formData.degree}
            onChange={handleChange}
            required
          >
            <option value="Matric">Matric</option>
            <option value="Intermediate">FSC</option>
            <option value="Graduation">BSc</option>
            <option value="Masters">B.S</option>
            <option value="M.Phil">B.S</option>
            <option value="Ph.D">B.S</option>



          </select>
        </div>
        <div className="form-group">
          <label>Course Applying For:</label>
          <select
            name="courseApplyingFor"
            className="form-control"
            value={formData.courseApplyingFor}
            onChange={handleChange}
            required
          >
            <option value="Full Stack Development">Full Stack Web Development</option>
            <option value="Python Development">Python Development</option>
            <option value="Amazon VA">Amazon VA</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ApplyForm;

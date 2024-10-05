import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('Signup successful', response.data);
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
      alert('Signup failed');
    }
  };

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">

        <h2>Sign Up</h2>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-input" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-input" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="form-input" 
            required 
          />
        </div>
        <button type="submit" className="form-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

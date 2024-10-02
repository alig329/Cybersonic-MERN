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
      // Change the URL to point to your backend server running on port 5000
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('Signup successful', response.data);
      // Redirect user or perform further actions
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
      alert('Signup failed');
    }
  };
  

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

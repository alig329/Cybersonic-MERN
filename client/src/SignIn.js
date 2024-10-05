import React from 'react';
import axios from 'axios';
import './styles.css';

const SignIn = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      alert('Sign in successful');
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Sign in failed');
    }
  };

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" className="form-input" required />
        </div>
        <button type="submit" className="form-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

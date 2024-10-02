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
      // Redirect user or store token
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Sign in failed');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

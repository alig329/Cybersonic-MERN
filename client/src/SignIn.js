import React, { useState } from 'react';
import { Button, TextField, Paper, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Created an instance of navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission

    try {
      const response = await fetch('https://cybersonic-mern-f9uneood7-muhammad-alis-projects-36eef05f.vercel.app/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // to send form data as JSON
      });

      const data = await response.json();
      if (response.ok) {
        console.log('User signed in successfully:', data);
        alert('User signed in successfully!');
        navigate('/services'); //  '/services' navigating the user to my "services" route
      } else {
        alert(data.message || 'Error signing in');
        console.error('Error signing in:', data.message);
      }
    } catch (error) {
      alert('Backend error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <Container component={Paper} elevation={3} style={{ padding: '20px', maxWidth: '400px', marginTop: '50px' }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Sign In
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          required
          name="email" // name attribute
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          required
          name="password" //  name attribute
          value={formData.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} type="submit">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;

import React, { useState } from 'react';
import { Button, TextField, Paper, Typography, Container, FormHelperText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
 const navigate = useNavigate();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset errors on change
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/; // Email must end with .com
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address ending with .com.';
      valid = false;
    }

    // Password length validation
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission

    // Validate form
    if (!validateForm()) {
      return; // Stops submission if form is invalid
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // it wll send form data as JSON
      });

      const data = await response.json();
      if (response.ok) {
        alert('User registered successfully!');
        navigate('/signin');
      } else {
        alert(data.message || 'Error registering user');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <Container component={Paper} elevation={3} style={{ padding: '20px', maxWidth: '400px', marginTop: '50px' }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name" // name field
          variant="outlined"
          margin="normal"
          required
          name="name" // name attribute
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name} // Show error state
          helperText={errors.name} // Display error message
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email} // Shows error state
          helperText={errors.email} // Displays error message
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password} // Shows error state
          helperText={errors.password} // Displays error message
        />
        <FormHelperText style={{ color: 'red' }}>
          Password must be at least 8 characters long.
        </FormHelperText>
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;

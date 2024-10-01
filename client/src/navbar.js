// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cyberonic SEOS
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          Courses
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/services"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          Services
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/careers"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          Careers
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/signin"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          Sign In
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/signup"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

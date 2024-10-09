import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Navbar = () => {
  const menuItems = [
    { text: 'Home', to: '/' },
    { text: 'Courses', to: '/services' },
    { text: 'Careers', to: '/careers' },
    { text: 'About', to: '/about' },
    { text: 'Sign In', to: '/signin' },
    { text: 'Sign Up', to: '/signup' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src="/logo 192.png" 
          alt="Company Logo"
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cyberonic SEOS
        </Typography>
        {/* Add the heading for testing */}
        <Typography variant="subtitle1" style={{ display: 'none' }}>
          navbar
        </Typography>
        <div className="navbar-buttons">
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={Link}
              to={item.to}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

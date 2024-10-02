import React from 'react';
import './styles.css';

import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Instagram, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar position="static" className="footer">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: 1 }}>
            &copy; 2024 Cyberonic SEOS. All rights reserved.
          </Typography>
          <Box className="social-icons">  
            <IconButton
              className="icon-button" // icon-button class
              href="https://www.facebook.com/people/Cyberonic-SEOS-Pakistan/61565780717486" // your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              className="icon-button" //* Use the icon-button class 
              href="https://www.instagram.com/cybronicseospakistan" // our Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
            <IconButton
              className="icon-button" //* icon-button class 
              href="mailto:info@cyberonicseos.com" // our email
              aria-label="Email"
            >
              <Email />
            </IconButton>
            <IconButton
              className="icon-button" //  icon-button class 
              href="tel:+923334080016" // our phone number
              aria-label="Phone"
            >
              <Phone />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

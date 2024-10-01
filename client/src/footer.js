import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Instagram, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor: '#333' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: 'white' }}>
            &copy; 2024 Cyberonic SEOS. All rights reserved.
          </Typography>
          <Box>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/people/Cyberonic-SEOS-Pakistan/61565780717486" // you people can replace with yours Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/cybronicseospakistan" // you people can replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
            <IconButton
              color="inherit"
              href="mailto:info@cyberonicseos.com" // you people can replace with your email
              aria-label="Email"
            >
              <Email />
            </IconButton>
            <IconButton
              color="inherit"
              href="tel:+923334080016" // yhou people can replace with your phone number
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

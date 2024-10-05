import React from 'react';
import './styles.css';

import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ color: 'white', marginBottom: 1 }}>
          &copy; 2024 Cyberonic SEOS. All rights reserved.
        </Typography>
        <Box className="social-icons">
          <IconButton
            className="icon-button"
            href="https://www.facebook.com/people/Cyberonic-SEOS-Pakistan/61565780717486"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </IconButton>
          <IconButton
            className="icon-button"
            href="https://www.instagram.com/cybronicseospakistan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </IconButton>
          <IconButton
            className="icon-button"
            href="mailto:info@cyberonicseos.com"
            aria-label="Email"
          >
            <Email />
          </IconButton>
          <IconButton
            className="icon-button"
            href="tel:+923334080016"
            aria-label="Phone"
          >
            <Phone />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Button, TextField, Paper, Typography, Container } from '@mui/material';

const SignIn = () => {
  return (
    <Container component={Paper} elevation={3} style={{ padding: '20px', maxWidth: '400px', marginTop: '50px' }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Sign In
      </Typography>
      <form noValidate autoComplete="off">
        <TextField fullWidth label="Email" variant="outlined" margin="normal" required />
        <TextField fullWidth label="Password" variant="outlined" margin="normal" type="password" required />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;

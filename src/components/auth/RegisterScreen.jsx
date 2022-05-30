import React from 'react';
import {
  Box, Button, Grid, Link, TextField, Typography,
} from '@mui/material';

import './auth.css';

function RegisterScreen() {
  return (
    <Box
      className="auth__container"
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        className="auth__content"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '500px',
          height: '500px',
          bgcolor: 'white',
          borderRadius: '1rem',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            required
            margin="normal"
            fullWidth
            id="name"
            label="Your Name"
            name="name"

          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#login" variant="body2">
                You have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterScreen;

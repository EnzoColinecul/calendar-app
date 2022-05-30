import React from 'react';
import {
  Avatar, Box, Button, Grid, Link, TextField, Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import './auth.css';

function LoginScreen() {
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
        <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#login" variant="body2">
                Don&apos;t have an account? Register
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginScreen;

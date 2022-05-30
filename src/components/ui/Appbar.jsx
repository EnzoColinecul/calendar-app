import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import React from 'react';

function Appbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Enzo
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;

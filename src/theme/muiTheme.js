import { createTheme } from '@mui/material';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#43BCA2',
      light: '#b0e2d6',
    },
    secondary: {
      main: '#c24242',
      light: '#f7cfd5',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
  },
});

export default muiTheme;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import App from './App';
import muiTheme from './theme/muiTheme';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={muiTheme}>
    <App />
  </ThemeProvider>,
);

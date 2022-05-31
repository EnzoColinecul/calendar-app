import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import App from './App';
import muiTheme from './theme/muiTheme';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
);

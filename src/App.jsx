import { CssBaseline } from '@mui/material';
import React from 'react';
// import Login from './components/auth/Login';
// import Register from './components/auth/RegisterScreen';
import CalendarScreen from './components/calendar/CalendarScreen';

function App() {
  return (
    <div className="main">
      <CssBaseline />
      <CalendarScreen />
    </div>
  );
}

export default App;

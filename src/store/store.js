import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import calendarReducer from '../reducers/calendarReducer';
import uiReducer from '../reducers/uiReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = {
  auth: authReducer,
  ui: uiReducer,
  calendar: calendarReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: [thunk],
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import {
  applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth: authReducer,
});

const store = configureStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export default store;

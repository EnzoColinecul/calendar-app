/* eslint-disable default-param-last */
import types from '../types/types';

const initialState = {
  logged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        logged: action.payload.logged,
      };
    case types.logout:
      return {
        logged: action.payload.logged,
      };
    default:
      return state;
  }
};

export default authReducer;

/* eslint-disable default-param-last */
import types from '../types/types';

const initialState = {
  showModal: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        showModal: true,
      };
    case types.uiCloseModal:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default uiReducer;

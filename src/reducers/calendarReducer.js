import { add } from 'date-fns';
import types from '../types/types';

const dateNow = add(new Date(), { hours: 1 });

const initialState = {
  events: [{
    title: 'Birthday',
    start: dateNow,
    end: add(dateNow, { hours: 1 }),
    bgcolor: '#fafafa',
    notes: 'Buy a gift',
    user: {
      _id: '1234',
      name: 'Fernando',
    },
  }],
  activeEvent: null,
};

// eslint-disable-next-line default-param-last
const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;

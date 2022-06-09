import types from '../types/types';

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export default eventSetActive;

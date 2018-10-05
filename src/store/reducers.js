import { combineReducers } from 'redux';
import { FETCH_PHOTOS } from './types';

const initialState = {
  items: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.payload || false;
    default:
      return state;
  }
};

export default combineReducers({
  items: dataReducer,
});

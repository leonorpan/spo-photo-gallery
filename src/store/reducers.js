import { combineReducers } from 'redux';
import { FETCH_PHOTOS, OPEN_MODAL, CLOSE_MODAL } from './types';

const initialDataState = {
  items: [],
};

const initialUiState = {
  show: false,
  item: null,
};

const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.payload || false;
    default:
      return state;
  }
};

const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        show: true,
        item: action.item,
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        show: false,
        item: null,
      });
    default:
      return state;
  }
};

export default combineReducers({
  items: dataReducer,
  ui: uiReducer,
});

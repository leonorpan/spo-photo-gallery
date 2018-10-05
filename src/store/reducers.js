import { combineReducers } from 'redux';
import {
  FETCH_PHOTOS,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_USER_COMMENT,
} from './types';

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
    case ADD_USER_COMMENT:
      return state.map(item => {
        if (item.id !== action.itemId) return item;
        return {
          ...item,
          userComments: [
            ...(item.userComments || []),
            {
              id: action.comment.id,
              value: action.comment.value,
            },
          ],
        };
      });
    default:
      return state;
  }
};

const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        show: true,
        id: action.id,
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        show: false,
        id: null,
      });
    default:
      return state;
  }
};

export default combineReducers({
  items: dataReducer,
  ui: uiReducer,
});

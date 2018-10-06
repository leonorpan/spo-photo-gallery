import { v1 } from 'uuid';
import { FETCH_PHOTOS, ADD_USER_COMMENT } from './types';

const initialState = {
  items: [],
};

const addUserComment = (state, action) => {
  return state.map(item => {
    if (item.id !== action.itemId) return item;
    const prevComments = item.userComments || [];
    return {
      ...item,
      userComments: [
        ...prevComments,
        {
          id: v1(),
          value: action.text,
        },
      ],
    };
  });
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.payload || false;
    case ADD_USER_COMMENT:
      return addUserComment(state, action);
    default:
      return state;
  }
};

export default itemsReducer;

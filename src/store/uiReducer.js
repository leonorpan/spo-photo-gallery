import { OPEN_MODAL, CLOSE_MODAL } from './types';

const initialState = {
  show: false,
  item: null,
};

const uiReducer = (state = initialState, action) => {
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

export default uiReducer;

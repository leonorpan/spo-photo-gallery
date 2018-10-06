import { combineReducers } from 'redux';
import ui from './uiReducer';
import items from './itemsReducer';

export default combineReducers({
  items,
  ui,
});

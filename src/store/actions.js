import {
  ADD_USER_COMMENT,
  FETCH_PHOTOS,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types';
import { fetchItems } from '../middleware/api';

const fetchPhotos = () => dispatch => {
  fetchItems().then(data => {
    dispatch({
      type: FETCH_PHOTOS,
      payload: data.hits,
    });
  });
};

const addComment = (itemId, text) => ({
  type: ADD_USER_COMMENT,
  itemId,
  text,
});

const openModal = id => ({
  type: OPEN_MODAL,
  show: true,
  id,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
  show: false,
  id: null,
});

export { fetchPhotos, openModal, closeModal, addComment };

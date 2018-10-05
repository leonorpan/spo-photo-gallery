import { FETCH_PHOTOS, OPEN_MODAL, CLOSE_MODAL } from './types';
import { fetchItems } from '../middleware/api';

const fetchPhotos = () => dispatch => {
  fetchItems().then(data => {
    dispatch({
      type: FETCH_PHOTOS,
      payload: data.hits,
    });
  });
};

const openModal = item => ({
  type: OPEN_MODAL,
  show: true,
  item,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
  show: false,
  item: null,
});

export { fetchPhotos, openModal, closeModal };

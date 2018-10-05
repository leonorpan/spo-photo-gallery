import { FETCH_PHOTOS, OPEN_MODAL } from './types';
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

export { fetchPhotos, openModal };

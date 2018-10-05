import { FETCH_PHOTOS } from './types';
import { fetchItems } from '../middleware/api';

const fetchPhotos = () => dispatch => {
  fetchItems().then(data => {
    dispatch({
      type: FETCH_PHOTOS,
      payload: data.hits,
    });
  });
};

export { fetchPhotos };

import { API_URL } from '../cnst';

function fetchPhotos() {
  fetch(`${API_URL}/api`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    });
}

export { fetchPhotos };

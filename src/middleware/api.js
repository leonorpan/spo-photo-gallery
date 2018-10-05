import { API_URL } from '../cnst';

function fetchItems() {
  return fetch(`${API_URL}/api`)
    .then(resp => resp.json())
    .then(data => {
      // todo: handle error
      return data;
    });
}

export { fetchItems };

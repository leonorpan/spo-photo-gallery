import { API_URL } from '../cnst';

function fetchItems() {
  return fetch(`${API_URL}`)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        // todo: handle properly
        console.log(data);
        return [];
      }
      return data;
    })
    .catch(error => {
      console.log('An error occured with status' + error.status);
      return [];
    });
}

export { fetchItems };

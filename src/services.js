import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=28107695-b6e67fe78ed729dbc6d2c568c';

export async function getImages(searchName, realPage) {
  const response = await axios.get(
    `${BASE_URL}?q=${searchName}&page=${realPage}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '31648463-5bfd0821986873c6b73af9bf8';

export async function fetchImges(page, searchQuery) {
  return await axios.get(
    `?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
}

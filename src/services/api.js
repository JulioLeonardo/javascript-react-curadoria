import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.themoviedb.org/4/list/1?api_key=' +
    `${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}`,
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.themoviedb.org/4/list/1?api_key=b26cf12e5aa392806a61ed8a3ac6b62b',
});

export default api;

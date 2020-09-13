import { combineReducers } from 'redux';

import synopsis from './synopsis';
import handleMovies from './movies';

export default combineReducers({
  synopsis,
  handleMovies,
});

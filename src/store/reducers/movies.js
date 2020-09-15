const INITIAL_STATE = {
  movies: [],
  liked: [],
  disliked: [],
};

function handleMovies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        movies: action.movies,
      };
    case 'SET_LIKED': {
      return {
        ...state,
        liked: [action.data, ...(state.liked || [])],
        movies: state.movies.filter((movie) => movie.id !== action.data.id),
      };
    }

    case 'SET_JUMPED':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.data.id),
      };

    case 'SET_DISLIKED':
      return {
        ...state,
        disliked: [action.data, ...(state.disliked || [])],
        movies: state.movies.filter((movie) => movie.id !== action.data.id),
      };

    default:
      return state;
  }
}

export default handleMovies;

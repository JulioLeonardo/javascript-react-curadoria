import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';

function MoviesHome() {
  return (
    <div id="movies">
      {console.log('Variavel de ambiente', process.env.REACT_APP_THE_MOVIE_DB_API_KEY)}
      <Header />
      <MovieCard />
    </div>
  );
}

export default MoviesHome;

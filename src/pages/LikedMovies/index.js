import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';

function LikedMovies() {
  return (
    <div id="liked-movies">
      <Header />
      <MovieList title="FILMES CURTIDOS" />
    </div>
  );
}

export default LikedMovies;

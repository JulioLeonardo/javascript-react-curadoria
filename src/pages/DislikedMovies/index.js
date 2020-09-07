import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';

function Disliked() {
  return (
    <div id="movies">
      <Header />
      <MovieList />
    </div>
  );
}

export default Disliked;

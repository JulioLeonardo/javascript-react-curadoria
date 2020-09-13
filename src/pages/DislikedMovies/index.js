import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';

function Disliked() {
  return (
    <div id="disliked-movies">
      <Header />
      <MovieList title="FILMES NÃO CURTIDOS" />
    </div>
  );
}

export default Disliked;

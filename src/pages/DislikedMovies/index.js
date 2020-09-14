import React from 'react';

import { connect } from 'react-redux';

import './styles.css';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';

function Disliked({ disliked }) {
  console.log(disliked);
  return (
    <div id="disliked-movies">
      <Header />
      <MovieList movies={disliked} title="FILMES NÃO CURTIDOS" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  disliked: state.handleMovies.disliked,
});


export default connect(mapStateToProps)(Disliked);

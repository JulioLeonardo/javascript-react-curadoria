import React from 'react';

import { connect } from 'react-redux';

import './styles.css';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import Footer from '../../components/Footer';

function LikedMovies({ liked }) {
  return (
    <div id="liked-movies">
      <Header />
      <MovieList movies={liked} title="FILMES CURTIDOS" />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  liked: state.handleMovies.liked,
});

export default connect(mapStateToProps)(LikedMovies);

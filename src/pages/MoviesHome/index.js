import React from 'react';

import { connect } from 'react-redux';

import './styles.css';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';

function MoviesHome({ movies }) {

  const appBgImage =
    `https://image.tmdb.org/t/p/w500/${movies[0].backdrop_path}`;
  const appBackground = {
    backgroundImage:
      'linear-gradient(to right, rgba(255,28,28,1), rgba(255,86,86,0.6)),' +
      `url(${appBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };
  return (
    <div id="movies" style={appBackground}>
      <Header />
      <MovieCard />
    </div>
  );
}
const mapStateToProps = (state) => ({
  movies: state.handleMovies.movies,
});

export default connect(mapStateToProps)(MoviesHome);

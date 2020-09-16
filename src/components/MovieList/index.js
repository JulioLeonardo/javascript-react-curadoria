import React from 'react';

import './styles.css';
import noMovie from '../../assets/images/video-camera-vazio.png';
import MiniMovieCard from '../MiniMovieCard';

function MovieList({ title, movies }) {
  return (
    <div className="movie-list">
      <h1 className="movie-list-title">{title}</h1>
      {movies === undefined ? (
        <>
          <img className="camera-no-movie" src={noMovie} alt="" />
          <h1 className="no-movie">NENHUM FILME</h1>
        </>
      ) : (
        <div className="container">
          {movies.map((movie, i) => (
            <MiniMovieCard key={i} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;

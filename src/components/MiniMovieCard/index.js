import React from 'react';

import './styles.css';
import HeartsContainer from '../HeartsContainer';

function MiniMovieCard({ movie }) {
  const bgImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  console.log(movie);
  console.log(movie.poster_path);
  const background = {
    backgroundImage: `url(${bgImage})`,
    width: '145px',
    height: '174px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '4px',
    paddingBottom: '10px',
    margin: 'auto',
    marginBottom: '10px',
  };
  const stars = movie.vote_average;
  return (
    <div className="mini-movie-card" style={background}>
      <h1 className="mini-card-title">{movie.original_title}</h1>
      <div className="hearts">
        <HeartsContainer stars={stars} />
      </div>
    </div>
  );
}

export default MiniMovieCard;

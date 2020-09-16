import React from 'react';

import './styles.css';
import HeartsContainer from '../HeartsContainer';
import SynopsisCard from '../SynopsisCard';

function MiniMovieCard({ movie }) {
  const bgImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const background = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(141, 141, 141, 0), rgba(3, 3, 3, 0.692)),' +
      `url(${bgImage})`,
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
  const year = movie.release_date.slice(0, 4);
  const title = movie.original_title.toUpperCase();
  const stars = movie.vote_average;
  const shortSynopsis = movie.overview.slice(0, 25);
  const synopsis = movie.overview;
  return (
    <div className="mini-movie-card" style={background}>
      <h1 className="mini-card-title">{title}</h1>
      <div className="hearts-reviews">
        <div className="hearts">
          <HeartsContainer stars={stars} />
        </div>
        <div className="mini-card-reviews">
          <p>({movie.vote_count} avaliações)</p>
        </div>
      </div>
      <div className="mini-card-synopsis">
        <p>{shortSynopsis}...</p>
        <button type="button" id="show-synopsis">
          Ver Sinopse
        </button>
      </div>
      <div className="mini-card-synopsis-card">
        <SynopsisCard
          image={bgImage}
          title={title}
          year={year}
          stars={stars}
          synopsis={synopsis}
          reviews={movie.vote_count}
        />
      </div>
    </div>
  );
}

export default MiniMovieCard;

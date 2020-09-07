import React, { useState, useEffect } from 'react';

import './styles.css';
import camera from '../../assets/images/video-camera-vazio.png';
import SynopsisCard from '../SynopsisCard';
import ButtonGroup from '../ButtonGroup';
import api from '../../services/api';
import HeartsContainer from '../HeartsContainer';

function MovieCard() {
  const [showSynopsis, setShowSynopsis] = useState(false);
  const [moviesFetch, setMoviesFetch] = useState([]);
  const [fetched, setFetched] = useState(false);
  const moviesList = [];

  async function fetchMovies() {
    const movies = await api.get();
    setMoviesFetch(movies.data.results);
    setFetched(true);
    // console.log(moviesFetch);
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  moviesList.push(moviesFetch);

  const handleShowSynopsis = () => {
    setShowSynopsis(true);
  };

  const childHandleClose = () => {
    setShowSynopsis(false);
  };

  const title = fetched && moviesFetch[0].original_title;
  const votes = fetched && moviesFetch[0].vote_count;
  const shortSynopsis = fetched && moviesFetch[0].overview.slice(0, 100);
  const bgImage =
    fetched && `https://image.tmdb.org/t/p/w500/${moviesFetch[0].poster_path}`;
  const background = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(141, 141, 141, 0), rgba(3, 3, 3, 0.692)),' +
      `url(${bgImage})`,
  };
  const stars = fetched && moviesFetch[0].vote_average;

  return (
    <>
      {fetched === false ? (
        <img id="no-movie" src={camera} alt="no-movie" />
      ) : (
        <>
          <div id="movie-card" style={background}>
            <h1 className="movie-card-title">{title}</h1>
            <div className="evaluation">
              <div className="hearts">
                {fetched && <HeartsContainer stars={stars} />}
              </div>
              <div className="reviews">
                <p>({votes} avaliações)</p>
              </div>
            </div>

            <div className="synopsis">
              <p>{shortSynopsis}...</p>
              <button
                type="button"
                onClick={handleShowSynopsis}
                id="show-synopsis"
              >
                Ver Sinopse
              </button>
            </div>
          </div>
          <SynopsisCard call={showSynopsis} status={childHandleClose} />
          <ButtonGroup />
        </>
      )}
    </>
  );
}

export default MovieCard;

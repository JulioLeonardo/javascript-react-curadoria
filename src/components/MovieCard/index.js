/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SynopsisActions from '../../store/actions/synopsis';

import './styles.css';
import camera from '../../assets/images/video-camera-vazio.png';
import SynopsisCard from '../SynopsisCard';
import ButtonGroup from '../ButtonGroup';
import HeartsContainer from '../HeartsContainer';

// eslint-disable-next-line react/prop-types
function MovieCard({ toggleSynopsis, movies }) {
  const handleShowSynopsis = () => {
    toggleSynopsis(true);
  };

  if (movies.length === 0 || undefined) {
    return (
      <div className="no-movie-div">
        <img id="no-movie" src={camera} alt="no-movie" />
        <h1 className="no-movie-title">SEM FILMES PARA EXIBIR</h1>
      </div>
    );
  }

  const title = movies[0].original_title.toUpperCase();
  const year = movies[0].release_date.slice(0, 4);
  const reviews = movies[0].vote_count;
  const synopsis = movies[0].overview;
  const shortSynopsis = movies[0].overview.slice(0, 100);
  const bgImage = `https://image.tmdb.org/t/p/w500/${movies[0].poster_path}`;
  const background = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(141, 141, 141, 0), rgba(3, 3, 3, 0.692)),' +
      `url(${bgImage})`,
  };
  const stars = movies[0].vote_average;

  return (
    <>
      <div id="movie-card" style={background}>
        <div className="title-evaluation">
          <h1 className="movie-card-title">{title}</h1>
          <div className="evaluation">
            <div className="hearts">
              <HeartsContainer stars={stars} />
            </div>
            <div className="reviews">
              <p>({reviews} avaliações)</p>
            </div>
          </div>
        </div>
        <p className="mc-synopsis-info">
          {year} - FANTASY/SCIENCE FICTION FILM - 2H 21M
        </p>
        <div className="synopsis">
          <p>{shortSynopsis}...</p>
          <button type="button" onClick={handleShowSynopsis} id="show-synopsis">
            Ver Sinopse
          </button>
        </div>
      </div>
      <SynopsisCard
        image={bgImage}
        title={title}
        year={year}
        stars={stars}
        synopsis={synopsis}
        reviews={reviews}
      />
      <ButtonGroup />
    </>
  );
}

const mapStateToProps = (state) => ({
  isSynopsisActive: state.synopsis.isSynopsisActive,
  movies: state.handleMovies.movies,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(SynopsisActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

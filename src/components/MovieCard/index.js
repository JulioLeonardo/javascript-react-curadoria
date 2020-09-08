import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SynopsisActions from '../../store/actions/synopsis';

import './styles.css';
import camera from '../../assets/images/video-camera-vazio.png';
import SynopsisCard from '../SynopsisCard';
import ButtonGroup from '../ButtonGroup';
import api from '../../services/api';
import HeartsContainer from '../HeartsContainer';

function MovieCard({isSynopsisActive, toggleSynopsis}) {
  const [showSynopsis, setShowSynopsis] = useState(false);
  const [moviesFetch, setMoviesFetch] = useState([]);
  const [fetched, setFetched] = useState(false);
  const moviesList = [];

  async function fetchMovies() {
    const movies = await api.get();
    setMoviesFetch(movies.data.results);
    setFetched(true);
    console.log(movies.data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  moviesList.push(moviesFetch);

  const handleShowSynopsis = () => {
    toggleSynopsis(true)
  };

  const title = fetched && moviesFetch[0].original_title;
  const year = fetched && moviesFetch[0].release_date.slice(0, 4);
  const reviews = fetched && moviesFetch[0].vote_count;
  const synopsis = fetched && moviesFetch[0].overview;
  const shortSynopsis = fetched && moviesFetch[0].overview.slice(0, 100);
  const bgImage =
    fetched && `https://image.tmdb.org/t/p/w500/${moviesFetch[0].poster_path}`;
  const background = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(141, 141, 141, 0), rgba(3, 3, 3, 0.692)),' +
      `url(${bgImage})`,
  };
  // const appBgImage =
  //   fetched &&
  //   `https://image.tmdb.org/t/p/w500/${moviesFetch[0].backdrop_path}`;
  // const appBackground = {
  //   backgroundImage:
  //     'linear-gradient(to right, rgba(255,28,28,1), rgba(255,86,86,0.6)),' +
  //     `url(${appBgImage})`,
  // };
  const stars = fetched && moviesFetch[0].vote_average;

  if (!fetched) {
    return (
      <div className="no-movie-div">
        <img id="no-movie" src={camera} alt="no-movie" />
      </div>
    );
  }
  return (
    <>
      <div id="movie-card" style={background}>
        <h1 className="movie-card-title">{title}</h1>
        <div className="evaluation">
          <div className="hearts">
            {fetched && <HeartsContainer stars={stars} />}
          </div>
          <div className="reviews">
            <p>({reviews} avaliações)</p>
          </div>
        </div>

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
        synopsis={synopsis}
        reviews={reviews}
      />
      <ButtonGroup />
    </>
  );
}

const mapStateToProps = state => ({
  isSynopsisActive: state.synopsis.isSynopsisActive
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SynopsisActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

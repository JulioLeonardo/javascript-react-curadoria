/* eslint-disable react/prop-types */
import React from 'react';

import './styles.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as buttonActions from '../../store/actions/buttonActions';

import dislike from '../../assets/images/n-curti.png';
import like from '../../assets/images/curti.png';

function ButtonGroup({ setDisliked, setJumped, setLiked, movies }) {
  const handleJump = () => {
    return setJumped(movies[0]);
  };
  const handleLike = () => {
    return setLiked(movies[0]);
  };
  const handleDislike = () => {
    return setDisliked(movies[0]);
  };

  return (
    <div className="button-group">
      <button onClick={handleDislike} type="button" className="like-dislike">
        <img src={dislike} alt="dislike" />
      </button>
      <button onClick={handleJump} type="button" className="jump">
        <p>PULAR</p>
      </button>
      <button onClick={handleLike} type="button" className="like-dislike">
        <img src={like} alt="dislike" />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.handleMovies.movies,
  liked: state.handleMovies.liked,
  disliked: state.handleMovies.disliked,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(buttonActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);

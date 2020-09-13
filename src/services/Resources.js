/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as moviesActions from '../store/actions/movies';

import api from './api';

function Resources(props) {
  const [fetched, setFetched] = useState(false);

  async function fetchMovies() {
    const movies = await api.get();
    props.setMovies(movies.data.results);
    setFetched(true);
    // console.log(movies.data);
  }

  useEffect(() => {
    fetchMovies();
  },[]);

  return <>{fetched && props.children}</>;
}

const mapStateToProps = (state) => ({
  movies: state.handleMovies.movies,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(moviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Resources);

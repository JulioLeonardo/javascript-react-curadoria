/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SynopsisActions from '../../store/actions/synopsis';

import './styles.css';
import heart from '../../assets/images/favorite.png';

function SynopsisCard(props) {
  const [showSynopsis, setShowSynopsis] = useState(false);

  const handleClose = () => {
    props.toggleSynopsis(false);
  };

  useEffect(() => {
    setShowSynopsis(props.isSynopsisActive);
  });

  return (
    showSynopsis && (
      <div id="synopsis-card" className="hide">
        <div className="content-top">
          <button type="button" onClick={handleClose} id="close">
            X
          </button>
          <img src={props.image} alt="poster" />
          <div className="content-main">
            <h1 className="synopsis-title">{props.title}</h1>
            <p className="synopsis-info">
              {props.year} - FANTASY/SCIENCE FICTION FILM - 2H 21M
            </p>
            <div className="hearts">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </div>
            <div className="synopsis-reviews">
              <p>({props.reviews} avaliações)</p>
            </div>
            <div className="synopsis-content">
              <p>{props.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

const mapStateToProps = state => ({
  isSynopsisActive: state.synopsis.isSynopsisActive
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SynopsisActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SynopsisCard);

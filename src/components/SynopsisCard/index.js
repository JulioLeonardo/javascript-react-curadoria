/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SynopsisActions from '../../store/actions/synopsis';

import './styles.css';
import HeartsContainer from '../HeartsContainer';

function SynopsisCard(props) {
  const [showSynopsis, setShowSynopsis] = useState(false);

  const toggleShowSynopsis = () => {
    showSynopsis ? setShowSynopsis(false) : setShowSynopsis(true);
  };

  return (
    <>
      <button type="button" onClick={toggleShowSynopsis} id="show-synopsis">
        Ver Sinopse
      </button>

      {showSynopsis && (
        <div id="synopsis-card" className="hide">
          <div className="content-top">
            <button type="button" onClick={toggleShowSynopsis} id="close">
              X
            </button>
            <img src={props.image} alt="poster" />
            <div className="content-main">
              <h1 className="synopsis-title">{props.title}</h1>
              <p className="synopsis-info">
                {props.year} - FANTASY/SCIENCE FICTION FILM - 2H 21M
              </p>
              <div className="hearts">
                <HeartsContainer stars={props.stars} black="black" />
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
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  isSynopsisActive: state.synopsis.isSynopsisActive,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(SynopsisActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SynopsisCard);

import React, { useState, useEffect } from "react";

import "./styles.css";
import heart from "../../assets/images/favorite.png";

function SynopsisCard(props) {
  const [showSynopsis, setShowSynopsis] = useState(false);

  const handleClose = () => {
    props.status();
  };

  useEffect(() => {
    setShowSynopsis(props.call);
  }, [props.call]);

  return (
    showSynopsis && (
      <div id="synopsis-card" className="hide">
        <div className="content-top">
          <button onClick={handleClose} id="close">
            X
          </button>
          <img
            src="https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
            alt=""
          />
          <div className="content-main">
            <h1 className="synopsis-title">THOR: RAGNAROK</h1>
            <p className="synopsis-info">
              2017 - FANTASY/SCIENCE FICTION FILM - 2H 21M
            </p>
            <div className="hearts">
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
              <img src={heart} alt="" />
            </div>
            <div className="synopsis-reviews">
              <p>(120 avaliações)</p>
            </div>
            <div className="synopsis-content">
              <p>
                Thor is imprisoned on the other side of the universe and finds
                himself in a race against time to get back to Asgard to stop
                Ragnarok, the destruction of his home-world and the end of
                Asgardian civilization, at the hands of an all-powerful new
                threat, the ruthless Hela.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SynopsisCard;

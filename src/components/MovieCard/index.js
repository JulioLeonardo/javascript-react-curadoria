import React, { useState } from "react";

import "./styles.css";
import heart from "../../assets/images/favorite.png";
import SynopsisCard from "../../components/SynopsisCard";

function MovieCard() {
  const [showSynopsis, setShowSynopsis] = useState(false);

  const handleShowSynopsis = () => {
    setShowSynopsis(true)
  }

  const childHandleClose = () => {
    setShowSynopsis(false)
  }
  
  return (
    <>
      <div id="movie-card">
        <h1 className="movie-card-title">THOR: RAGNAROK</h1>
        <div className="evaluation">
          <div className="hearts">
            <img src={heart} alt="" />
            <img src={heart} alt="" />
            <img src={heart} alt="" />
            <img src={heart} alt="" />
            <img src={heart} alt="" />
          </div>
          <div className="reviews">
            <p>(120 avaliações)</p>
          </div>
        </div>

        <div className="synopsis">
          <p>Sinopse aqui...</p>
          <button onClick={handleShowSynopsis} id="show-synopsis">
            Ver Sinopse
          </button>
        </div>
      </div>
      <SynopsisCard call={showSynopsis} status={childHandleClose} />
    </>
  );
}

export default MovieCard;

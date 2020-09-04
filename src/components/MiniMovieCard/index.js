import React from "react";

import "./styles.css";
import heart from "../../assets/images/favorite.png";

function MiniMovieCard() {
  return (
    <div className="container">
      <div className="mini-movie-card">
        <h1 className="mini-card-title">THOR: RAGNAROK</h1>
        <div className="hearts">
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
        </div>
      </div>
      <div className="mini-movie-card">
        <h1 className="mini-card-title">THOR: RAGNAROK</h1>
        <div className="hearts">
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
        </div>
      </div>
      <div className="mini-movie-card">
        <h1 className="mini-card-title">THOR: RAGNAROK</h1>
        <div className="hearts">
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
        </div>
      </div>
      <div className="mini-movie-card">
        <h1 className="mini-card-title">THOR: RAGNAROK</h1>
        <div className="hearts">
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MiniMovieCard;

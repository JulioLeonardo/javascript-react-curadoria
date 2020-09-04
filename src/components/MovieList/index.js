import React from "react";

import "./styles.css"
import noMovie from "../../assets/images/video-camera-vazio.png"

function MovieList() {
  return (
    <div className="movie-list">
      <h1 className="title">FILMES CURTIDOS</h1>
      <img src={noMovie} alt=""/>
      <h1 className="no-movie">NENHUM FILME</h1>
    </div>
  )
}

export default MovieList;
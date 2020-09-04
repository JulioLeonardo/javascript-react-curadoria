import React from "react";

import "./styles.css"
import noMovie from "../../assets/images/video-camera-vazio.png"
import MiniMovieCard from "../MiniMovieCard";

function MovieList() {
  return (
    <div className="movie-list">
      <h1 className="movie-list-title">FILMES CURTIDOS</h1>
      { false ? 
        <>
        <img src={noMovie} alt=""/>
        <h1 className="no-movie">NENHUM FILME</h1>
        </> :
        <MiniMovieCard />
      }
      
    </div>
  )
}

export default MovieList;
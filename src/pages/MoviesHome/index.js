import React from "react";

import "./styles.css"
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import ButtonGroup from "../../components/ButtonGroup";

function MoviesHome() {
  return (
    <div id="movies">
      <Header />
      <MovieCard />
      <ButtonGroup />
    </div>
  )
}

export default MoviesHome;
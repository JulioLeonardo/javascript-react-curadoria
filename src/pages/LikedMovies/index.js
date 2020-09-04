import React from "react";

import "./styles.css"
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";

function LikedMovies() {
  return (
    <div id="movies">
      <Header />
      <MovieList />
    </div>
  )
}

export default LikedMovies;
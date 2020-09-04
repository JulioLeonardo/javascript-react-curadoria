import React from "react";



import "./styles.css"
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard"

function Movies() {
  return (
    <div id="movies">
      <Header />
      <MovieCard />
    </div>
  )
}

export default Movies;
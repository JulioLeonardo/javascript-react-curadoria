import React from "react";

import "./styles.css";
import heart from "../../assets/images/favorite.png";

var movie = {
  poster_path: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  popularity: 88.025,
  vote_count: 14529,
  video: false,
  media_type: "movie",
  id: 284053,
  adult: false,
  backdrop_path: "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
  original_language: "en",
  original_title: "Thor: Ragnarok",
  genre_ids: [28, 12, 35, 14],
  title: "Thor: Ragnarok",
  vote_average: 7.6,
  overview:
    "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
  release_date: "2017-10-25",
};

function MovieCard() {
  return (
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
        <a href="#">Ver Sinopse</a>
      </div>
    </div>
  );
}

export default MovieCard;

import React from "react";
import "./MovieDetail.css";
import TrailerMovie from "./TrailerMovie";

const MovieDetail = (props) => {
  return (
    <div className="movie-detail">
      <div className="movie-detail__info">
        <h1>{props.movie.name ? props.movie.name : props.movie.title}</h1>
        <h3>Release Date: {props.movie.release_date}</h3>
        <h3>Vote: {props.movie.release_date}/10</h3>
        <p>{props.movie.overview}</p>
      </div>
      <div className="movie-detail__video">
        <TrailerMovie trailerMovie={props.movie} />
      </div>
    </div>
  );
};

export default MovieDetail;

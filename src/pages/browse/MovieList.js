import React, { useState } from "react";
import "./MovieList.css";
import useFetch from "../../hooks/use-fetch";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);

  useFetch(props.url, dataHandler);

  function dataHandler(e) {
    setMovieList(e.results);
  }

  let isOriginal = props.type === "Original";

  const getIDHandler = (e) => {
    const [movieId] = movieList.filter(
      (item) => item.id === Number(e.target.id)
    );

    props.movieDetail(movieId);
  };

  const getParentId = (e) => {
    const typeOfMovieToClick = e.target.parentElement.parentElement.id;
    props.getType(typeOfMovieToClick);
  };

  const movieListArr = movieList.map((item) => {
    return (
      <img
        key={item.id}
        id={item.id}
        src={`https://image.tmdb.org/t/p/original/${
          isOriginal ? item.poster_path : item.backdrop_path
        }`}
        alt={item.title}
        width="100%"
        onClick={getIDHandler}
      />
    );
  });

  return (
    <div className="main-list" id={props.type} onClick={getParentId}>
      <h2>{!isOriginal ? props.type : ""}</h2>
      <div>{movieListArr}</div>
    </div>
  );
};

export default MovieList;

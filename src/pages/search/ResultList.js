import React, { useState } from "react";
import useFetch from "../../hooks/use-fetch";
import "./ResultList.css";

const ResultList = (props) => {
  const [searchMovie, setSearchMovie] = useState([]);

  useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b10f26ad1365b480abc56ae5b5d98080&language=en-US&query=${props.value}&page=1&include_adult=false`,
    movieFromSearch,
    props.value
  );

  function movieFromSearch(movie) {
    setSearchMovie(movie.results);
  }

  function getIdHandle(movie) {
    const [idChoosed] = searchMovie.filter(
      (item) => item.id === Number(movie.target.id)
    );

    props.movieDetail(idChoosed);
  }

  const listSearch = searchMovie.map((movie) => {
    return (
      <img
        key={movie.id}
        id={movie.id}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        onClick={getIdHandle}
      />
    );
  });

  return <div className="result">{listSearch}</div>;
};

export default ResultList;

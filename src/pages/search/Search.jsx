import React, { useState } from "react";
import NavBar from "../browse/NavBar";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import MovieDetail from "../browse/MovieDetail";

const Search = () => {
  const [value, setValue] = useState("");
  const [movieDetail, setMovieDetail] = useState({
    id: 0,
    movie: "",
    show: false,
  });

  const getMovieDetail = (movie) => {
    if (movieDetail.id !== movie.id) {
      setMovieDetail({
        id: movie.id,
        movie: movie,
        show: true,
      });
    } else {
      setMovieDetail({
        id: 0,
        movie: "",
        show: false,
      });
    }
  };

  const getValueInput = (value) => {
    setValue(value);
  };

  return (
    <div className="app">
      <div className="search">
        <NavBar />
        <SearchForm value={getValueInput} />
      </div>
      <div className="search-result">
        <h2>Search Results</h2>
        {movieDetail.show && <MovieDetail movie={movieDetail.movie} />}
        <ResultList value={value} movieDetail={getMovieDetail} />
      </div>
    </div>
  );
};

export default Search;

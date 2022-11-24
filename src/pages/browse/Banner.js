import React, { useState } from "react";
import "./NavBar.css";
import useFetch from "../../hooks/use-fetch";
import "./Banner.css";

const Banner = () => {
  const [movieTrending, setMovieTrending] = useState([]);

  const randomMovie = (e) => {
    const navMovie =
      e.results[Math.floor(Math.random() * e.results.length - 1)];
    setMovieTrending(navMovie);
  };

  useFetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=b10f26ad1365b480abc56ae5b5d98080&language=en-US",
    randomMovie
  );

  const title = movieTrending.title ? movieTrending.title : movieTrending.name;

  return (
    <div className="banner">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieTrending.backdrop_path}`}
        alt={title}
        width="100%"
      />
      <div>
        <h1>{title}</h1>
        <button>Play</button>
        <button>Add List</button>
        <p>{movieTrending.overview}</p>
      </div>
    </div>
  );
};

export default Banner;

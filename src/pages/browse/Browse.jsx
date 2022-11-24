import React, { useState } from "react";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import Banner from "./Banner";
import "./Browse.css";

const API_KEY = "b10f26ad1365b480abc56ae5b5d98080";
function Browse() {
  const requests = [
    {
      type: "Original",
      url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123S`,
    },
    {
      type: "Trending",
      url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    {
      type: "Top Rank",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
      type: "Action",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
      type: "Comedy",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
      type: "Horror",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
      type: "Romance",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
      type: "Document",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
  ];
  const [typeWhenClick, setTypeWhenClick] = useState("");
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

  const getTypeWhenClick = (type) => {
    setTypeWhenClick(type);
  };

  const movieList = requests.map((item, index) => {
    return (
      <div className="movie-list" key={index}>
        <MovieList
          url={item.url}
          type={item.type}
          movieDetail={getMovieDetail}
          getType={getTypeWhenClick}
        />
        {typeWhenClick === item.type && movieDetail.show && (
          <MovieDetail movie={movieDetail.movie} />
        )}
      </div>
    );
  });

  return (
    <div>
      <NavBar />
      <Banner />
      {movieList}
    </div>
  );
}

export default Browse;

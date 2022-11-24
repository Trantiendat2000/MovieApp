import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const TrailerMovie = (props) => {
  const [hasVideo, setHasVideo] = useState(false);
  const [getTrailer, setGetTrailer] = useState(
    props.trailerMovie.backdrop_path
  );

  useEffect(() => {
    const fetchTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props.trailerMovie.id}/videos?api_key=b10f26ad1365b480abc56ae5b5d98080`
      );

      const data = await response.json();

      let typeOfVideo = data.results.filter((type) => {
        return type.type === "Trailer";
      });

      if (typeOfVideo.length === 0) {
        typeOfVideo = data.results.filter((type) => {
          return type.type === "Teaser";
        });
      }  
      if (typeOfVideo.length === 0) {
        setHasVideo(false);
      } else {
        setHasVideo(true);
        setGetTrailer(typeOfVideo[0]);
      }
    };

    fetchTrailer();
  }, [props]);

  const opts = {
    height: "400px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      {hasVideo && <YouTube videoId={getTrailer.key} opts={opts} />}
      {!hasVideo && (
        <img
          src={`https://image.tmdb.org/t/p/original/${props.trailerMovie.backdrop_path}`}
          alt={props.trailerMovie.title}
          width="100%"
          height="400px"
        />
      )}
    </div>
  );
};

export default TrailerMovie;

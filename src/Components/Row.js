import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, url, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(url);
      setMovie(request.data.results);
      console.log(request.data.results);
    }
    fetchMovie();
  }, [url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailer(urlParam.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //console.log(movie);

  return (
    <div className="row ml-5">
      <h2 className="text-white font-semibold text-2xl"> {title} </h2>
      <div className="flex w-full p-7 object-contain overflow-y-hidden overflow-x-scroll moviePoster">
        {movie.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${imageURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`mr-3 max-h-32 cursor-pointer row-movie ${
              isLargeRow && "max-h-60 hover:scale-120"
            }`}
          />
        ))}
      </div>

      {trailer && <Youtube videoId={trailer} opts={opts} />}
    </div>
  );
}

export default Row;

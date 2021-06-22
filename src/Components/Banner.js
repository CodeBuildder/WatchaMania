import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import apiRequest from "../api/api";
import "./Row.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const imageURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchBanner() {
      const request = await axios.get(apiRequest.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchBanner();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="h-96 pb-8 banner object-contain text-white"
      style={{
        backgroundImage: `url("${imageURL}${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="ml-12 pt-32 bannerContainer">
        <h1 className="text-5xl font-extrabold pb-3">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerButttons">
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-md pl-8 pr-8 mr-4 pt-2 bg-gray-900 bg-opacity-50 pb-2 hover:text-black hover:bg-white hover:transition duration-700 ease-in-out">
            Play
          </button>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-md pl-8 pr-8 mr-4 pt-2 bg-gray-900 bg-opacity-50 pb-2 hover:text-black hover:bg-white hover:transition duration-700 ease-in-out">
            My List
          </button>
        </div>

        <h1 className="h-20 w-45 leading-5 pt-4 text-sm max-w-sm bannerDescription">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}

export default Banner;

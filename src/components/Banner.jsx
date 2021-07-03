import React, { useEffect, useState } from "react";
import { API_KEY } from "../requests";
import "./banner.css";
const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;

const Banner = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]));
    setLoading(false);
  }, []);

  if (loading) {
    return <p>loading</p>;
  }

  function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + "…" : str;
  }

  return (
    <header className="banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")` }}>
      <div className="banner__contents">
        <h3 className="banner__title">{movie?.title || movie?.name || movie?.original_name} </h3>

        <div className="banner__buttons">
          <button className="bannerBtn">Play</button>
          <button className="bannerBtn">My List</button>
        </div>
        <p className="bannerDesc">{movie ? truncate(movie.overview, 150) : ""}</p>
      </div>
      <div className="banner__fade"></div>
    </header>
  );
};

export default Banner;

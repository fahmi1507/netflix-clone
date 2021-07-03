import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./row.css";
import movieTrailer from "movie-trailer";

const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const Row = ({ data }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(baseUrl + data.url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    setLoading(false);
  }, [data.url]);

  if (loading) {
    return <h3>loading</h3>;
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })

        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row">
      <h3>{data.category}</h3>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(movie)}
            className={`poster ${data.category === "Netflix Originals" && "poster__large"}`}
            key={movie.id}
            src={`${imgUrl}${data.category === "Netflix Originals" ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title}
          ></img>
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

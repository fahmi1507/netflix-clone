import React, { useEffect, useState } from "react";
import "./row.css";
const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Row = ({ data }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

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
  return (
    <div className="row">
      {/* title */}
      <h4>{data.category}</h4>

      <div className="row__posters">
        {movies.map((movie) => (
          <img className="poster" key={movie.id} src={imgUrl + movie.poster_path} alt={movie.title}></img>
        ))}
      </div>

      {/* posters */}
    </div>
  );
};

export default Row;

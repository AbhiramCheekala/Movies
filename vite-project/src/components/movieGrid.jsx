import React, { useState, useEffect } from "react";
import "./grid.css";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:8082/api/v1/movies");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id.timestamp} className="movie-card">
          <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
            />
          </a>
          <div className="movie-info">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-genre">Genres: {movie.genres.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;

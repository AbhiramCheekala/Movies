import React, { useState } from "react";
import CarouselComponent from "./carousel";
import "./movie.css";

const MovieSelector = () => {
  const [movieId, setMovieId] = useState("");
  const [submittedMovieId, setSubmittedMovieId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedMovieId(movieId);
  };

  const handleChange = (event) => {
    setMovieId(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {" "}
        {/* Add class to the form */}
        <label>
          Enter Movie ID:
          <input type="text" value={movieId} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      {submittedMovieId && <CarouselComponent movieId={submittedMovieId} />}
    </div>
  );
};

export default MovieSelector;

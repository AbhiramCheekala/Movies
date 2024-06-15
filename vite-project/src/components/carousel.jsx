import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

const CarouselComponent = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8082/api/v1/movies/${movieId}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel-container">
      <div className="movie-details">
        <img
          src={movieData.poster}
          alt={movieData.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movieData.title}</h1>
          <p>Release Date: {movieData.releaseDate}</p>
          <p>Genres: {movieData.genres.join(", ")}</p>
          <a
            href={movieData.trailerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="trailer-link"
          >
            Watch Trailer
          </a>
        </div>
      </div>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {movieData.backdrops.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Backdrop ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

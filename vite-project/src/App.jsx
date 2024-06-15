import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import MovieSelector from "./components/MovieSelector";
import MovieGrid from "./components/movieGrid";

// import MovieSelector from "./components/MovieSelector"; // Import the MovieSelector component

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieSelector />
      <MovieGrid />
    </div>
  );
}

export default App;

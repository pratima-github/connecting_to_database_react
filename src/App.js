import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  async function fetchMovieHandler() {
    const response = await fetch("https://swapi.dev/api/films/")
    const data=response.json();
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        console.log(transformedMovies);
        setMovies(transformedMovies);
      }
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList items={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;

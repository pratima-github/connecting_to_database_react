import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
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
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList items={movies} />}
        {/* {!isLoading && movies.length === 0 && <p>Found no movies</p>} */}
        {isLoading && <p>Loading.......</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

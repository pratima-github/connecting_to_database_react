import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.items?.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
        // <li className={classes.movie}>
        //   <h2>{movie.title}</h2>
        //   <h3>{movie.releaseDate}</h3>
        //   <p>{movie.openingText}</p>
        // </li>
      ))}
    </ul>
  );
};

export default MovieList;

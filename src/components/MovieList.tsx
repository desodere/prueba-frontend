// src/components/MovieList.tsx

import React from "react";
import { Movie } from "../types";
import { Link } from "react-router-dom";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

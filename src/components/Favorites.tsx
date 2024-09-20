import React from "react";
import { useFavoriteStore } from "../stores/favoriteStore";
import { Link } from "react-router-dom";
import { Movie } from "../types";
/* Prueba */
const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavoriteStore();

  if (favorites.length === 0) {
    return <p>No favorite movies yet.</p>;
  }

  return (
    <div>
      <h1>Favoritos</h1>
      <ul>
        {favorites.map((movie: Movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100px" }}
              />
              <p>
                {movie.Title} ({movie.Year})
              </p>
            </Link>
            <button
              onClick={() => removeFavorite(movie.imdbID)}
              style={{ marginLeft: "10px" }}
            >
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

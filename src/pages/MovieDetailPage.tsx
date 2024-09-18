import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/omdbApi";
import { useFavoriteStore } from "../stores/favoriteStore";
import { Movie } from "../types";
import * as Styles from "./MovieDetailPage.styles";

const MovieDetailPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const { addFavorite, removeFavorite, favorites } = useFavoriteStore();

  useEffect(() => {
    if (movieId) {
      const getMovieDetails = async () => {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      };

      getMovieDetails();
    }
  }, [movieId]);

  const isFavorite =
    movie && favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <Styles.Container>
      {movie ? (
        <>
          <Styles.Title>{movie.Title}</Styles.Title>
          <Styles.Poster src={movie.Poster} alt={movie.Title} />
          <Styles.Plot>{movie.Plot}</Styles.Plot>
          <Styles.FavoriteButton
            $isFavorite={isFavorite || false}
            onClick={() =>
              isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie)
            }
          >
            {isFavorite ? "Remover de Favoritos" : "Añadir a Favoritos"}
          </Styles.FavoriteButton>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Styles.Container>
  );
};

export default MovieDetailPage;

import React from "react";
import { useFavoriteStore } from "../stores/favoriteStore";
import * as Styles from "./FavoritesPage.styles";

const FavoritesPage: React.FC = () => {
  const { favorites, removeFavorite } = useFavoriteStore();

  return (
    <Styles.Container>
      <Styles.Title>Favoritos</Styles.Title>
      {favorites.length === 0 ? (
        <p>Aún no tienes películas favoritas.</p>
      ) : (
        favorites.map((movie) => (
          <Styles.MovieItem key={movie.imdbID}>
            <Styles.MovieTitle>{movie.Title}</Styles.MovieTitle>
            <Styles.MoviePoster src={movie.Poster} alt={movie.Title} />
            <Styles.MovieYear>{movie.Year}</Styles.MovieYear>
            <Styles.MovieLink to={`/movie/${movie.imdbID}`}>
              Ver detalles
            </Styles.MovieLink>
            <Styles.RemoveButton onClick={() => removeFavorite(movie.imdbID)}>
              Remover de Favoritos
            </Styles.RemoveButton>
          </Styles.MovieItem>
        ))
      )}
      <div>
        <Styles.StyledScrollToTop smooth />
      </div>
    </Styles.Container>
  );
};

export default FavoritesPage;

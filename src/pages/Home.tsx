import React, { useState, useCallback } from "react";
import { fetchMovies } from "../services/omdbApi";
import { Movie } from "../types";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import * as Styles from "./Home.styles";
import { useFavoriteStore } from "../stores/favoriteStore";
import IconHeart from "../assets/icons/IconHeart";
import IconHeartBreak from "../assets/icons/IconHeartBreak";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { ref, inView } = useInView();

  const handleSearch = async () => {
    setLoading(true);
    setPage(1);
    try {
      if (searchTerm.trim() === "") {
        console.warn("Search term is empty.");
        setMovies([]);
        setHasMore(false);
        return;
      }

      const results = await fetchMovies(searchTerm, 1);
      setMovies(results);
      setHasMore(results.length > 0);
    } catch (error) {
      console.error("Error al recuperar películas:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreMovies = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newPage = page + 1;
      const results = await fetchMovies(searchTerm, newPage);
      setMovies((prevMovies) => [...prevMovies, ...results]);
      setPage(newPage);
      setHasMore(results.length > 0);
    } catch (error) {
      console.error("Error fetching more movies:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, page, loading, hasMore]);

  React.useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView, loadMoreMovies]);

  const { addFavorite, removeFavorite, favorites } = useFavoriteStore();

  const isFavorite = (movie: Movie) => {
    return favorites.some((fav) => fav.imdbID === movie.imdbID);
  };

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Lista de películas</Styles.Title>
        <Styles.SearchWrapper>
          <Styles.SearchInput
            type="text"
            id="searchTerm"
            name="searchTerm"
            placeholder="Buscar Películas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Styles.SearchButton onClick={handleSearch} disabled={loading}>
            {loading ? "Cargando..." : "Buscar"}
          </Styles.SearchButton>
        </Styles.SearchWrapper>
      </Styles.Header>

      <main>
        {movies.length > 0 ? (
          <>
            <Styles.MovieList>
              {movies.map((movie) => (
                <Styles.MovieItem key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <h2>{movie.Title}</h2>
                    <img src={movie.Poster} alt={movie.Title} />
                  </Link>
                  <Styles.FavoriteButton
                    $isFavorite={isFavorite(movie)}
                    onClick={() =>
                      isFavorite(movie)
                        ? removeFavorite(movie.imdbID)
                        : addFavorite(movie)
                    }
                  >
                    {isFavorite(movie) ? (
                      <>
                        <IconHeartBreak height="24" width="24" />
                        Eliminar de favoritos
                      </>
                    ) : (
                      <>
                        <IconHeart height="24" width="24" />
                        Añadir a favoritos
                      </>
                    )}
                  </Styles.FavoriteButton>
                </Styles.MovieItem>
              ))}
            </Styles.MovieList>
            <div ref={ref}>
              {loading && (
                <Styles.LoadingMessage>
                  Cargando más películas...
                </Styles.LoadingMessage>
              )}
            </div>
          </>
        ) : (
          <Styles.NoMoviesFound>
            No se encontraron películas
          </Styles.NoMoviesFound>
        )}
      </main>
    </Styles.Container>
  );
};

export default Home;

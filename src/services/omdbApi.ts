const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
if (!API_KEY) {
  throw new Error("API key is missing!");
}
const BASE_URL = "https://www.omdbapi.com/"; // URL base de la API

// Función para buscar películas por título y página
export const fetchMovies = async (searchTerm: string, page: number = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?s=${searchTerm}&page=${page}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      return data.Search;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Función para obtener los detalles de una película por ID

export const fetchMovieDetails = async (movieId: string) => {
  if (!movieId) {
    throw new Error("Movie ID is required");
  }

  try {
    const response = await fetch(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`);
    const data = await response.json();
    console.log("Movie Details:", data);

    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

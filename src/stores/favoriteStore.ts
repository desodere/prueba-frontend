import { create } from "zustand";
import { Movie } from "../types";

interface FavoriteStore {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (imdbID: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),

  addFavorite: (movie: Movie) => {
    set((state) => {
      const updatedFavorites = [...state.favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    });
  },

  removeFavorite: (imdbID: string) => {
    set((state) => {
      const updatedFavorites = state.favorites.filter(
        (fav) => fav.imdbID !== imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites };
    });
  },
}));

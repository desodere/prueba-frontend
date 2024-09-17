import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #00c9ff, #92fe9d);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;

  /* Responsive para pantallas móviles */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 10px;
  }
  }

  /* Media Query para tablets */
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 10px;
  }

  /* Media Query para escritorios */
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px; /* Ajusta el ancho máximo si es necesario */
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 8px;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #ff6f61;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff5a4c;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  /* Responsive para pantallas móviles */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 10px;
  }
  }

  /* Media Query para tablets */
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 10px;
  }

  /* Media Query para escritorios */
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: column;
    padding: 10px;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

export const MovieItem = styled.li`
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  h2 {
    font-size: 24px;
    margin: 10px 0;
    color: #333;
  }
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px; /* Espacio entre la imagen y el botón */
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 25px;
  border: none;
  background-color: ${({ $isFavorite }) =>
    $isFavorite ? "#ff6b6b" : "#4CAF50"};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background-color: ${({ $isFavorite }) =>
      $isFavorite ? "#ff4c4c" : "#45a049"};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  /* Asegura que el botón esté centrado debajo de la imagen */
  width: 100%;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
`;

export const NoMoviesFound = styled.p`
  font-size: 18px;
  text-align: center;
  color: #888;
  margin-top: 50px;
`;

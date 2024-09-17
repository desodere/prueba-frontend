import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  color: #444;
  margin-bottom: 10px;
`;

export const MoviePoster = styled.img`
  width: 150px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const MovieYear = styled.p`
  color: #777;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  color: #4caf50;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 10px;
  &:hover {
    color: #388e3c;
  }
`;

export const RemoveButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff4c4c;
    transform: translateY(-3px);
  }

  /* Media Query para pantallas móviles */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
    font-size: 14px;
  }

  /* Media Query para tablets */
  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
    font-size: 16px;
  }

  /* Media Query para escritorios */
  @media (min-width: ${breakpoints.desktop}) {
    padding: 25px;
    font-size: 18px;
  }
`;

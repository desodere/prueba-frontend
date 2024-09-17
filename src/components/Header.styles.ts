import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

export const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #00c9ff, #92fe9d);
  color: white;
  padding: 20px 40px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-size: 24px; /* Tamaño del texto del header */
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  position: relative;

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

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0; /* Asegura que no haya margen extra en la lista */
`;

export const Li = styled.li`
  font-size: inherit; /* Hereda el tamaño de fuente del header */
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: inherit; /* Hereda el tamaño de fuente del header */
  display: flex;
  align-items: center; /* Alinea verticalmente el ícono y el texto */
  transition: background 0.3s ease, transform 0.3s ease, font-size 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    font-size: 1.1em; /* Aumenta ligeramente el tamaño de la letra (110%) */
  }

  svg {
    margin-right: 8px; /* Espacio entre el ícono y el texto */
    transition: transform 0.3s ease; /* Asegura que el ícono crezca junto con el texto */
  }

  &:hover svg {
    transform: scale(1.1); /* Aumenta el tamaño del ícono al pasar el cursor */
  }
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

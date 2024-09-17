// src/components/Header.tsx

import React from "react";
/*import { Link } from "react-router-dom";*/
import { useFavoriteStore } from "../stores/favoriteStore";
import { HeaderWrapper, Nav, Ul, Li, StyledLink } from "./Header.styles";
import IconHomeSearchOutline from "../assets/icons/IconHomeSearchOutline"; // Ajusta la ruta si es necesario
import IconHomeFavorite from "../assets/icons/IconHomeFavorite"; // Ajusta la ruta si es necesario

const Header: React.FC = () => {
  const { favorites } = useFavoriteStore(); // Obtén la lista de favoritos del store

  return (
    <HeaderWrapper>
      <Nav>
        <Ul>
          <Li>
            <StyledLink to="/">
              <IconHomeSearchOutline height="30" width="30" />
              Inicio
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/favorites">
              <IconHomeFavorite height="30" width="30" />
              Favoritos ({favorites.length})
            </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

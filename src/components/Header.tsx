import React from "react";

import { useFavoriteStore } from "../stores/favoriteStore";
import { HeaderWrapper, Nav, Ul, Li, StyledLink } from "./Header.styles";
import IconHomeSearchOutline from "../assets/icons/IconHomeSearchOutline";
import IconHomeFavorite from "../assets/icons/IconHomeFavorite";

const Header: React.FC = () => {
  const { favorites } = useFavoriteStore();

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

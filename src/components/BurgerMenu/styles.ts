import { Search } from "components/Search/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledBurgerMenu = styled.div`
  justify-self: end;
`;

const Menu = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: ${Color.WHITE_BACKGROUND};
`;

const StyledSearch = styled(Search)``;

const Favorites = styled(Link)``;

export { StyledBurgerMenu, Menu, Favorites, StyledSearch };

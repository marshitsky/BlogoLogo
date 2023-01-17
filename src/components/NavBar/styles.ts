import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color, Media } from "ui";
import { Search } from "components/Search/Search";

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 0.5fr 1fr;
  align-items: center;
  gap: 32px;
  padding: 0 32px;
  background-color: ${Color.WHITE_HEADER};
  ${Media.MD} {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNavLink = styled(Link)`
  width: 157px;
  padding: 20px 0;
  border-radius: 4.67px;
`;

const StyledFavoritesLink = styled(Link)`
  position: relative;
  justify-self: end;
  font-size: 32px;
  color: #ff0000 !important;
`;

const StyledSearch = styled(Search)`
  justify-self: end;
  width: 100%;
  background-color: ${Color.EXTRA_LIGHT};
`;

export { Navigation, StyledNavLink, StyledFavoritesLink, StyledSearch };

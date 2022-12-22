import styled from "styled-components";
import { Color } from "../../ui";
import { Search } from "../Search/Search";
import { NavLink } from "react-router-dom";

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  height: 96px;
  padding: 0 5px;
  background-color: ${Color.WHITE_HEADER};
`;

const StyledNavLink = styled(NavLink)`
  max-width: 157px;
`;

const StyledSearch = styled(Search)`
  justify-self: end;
  width: 100%;
  background-color: ${Color.EXTRA_LIGHT};
`;

export { Navigation, StyledNavLink, StyledSearch };

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color, Media } from "ui";
import { Search } from "components/Search/Search";

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 167px auto;
  align-items: center;
  gap: 32px;
  max-height: 100px;
  width: 100%;
  padding: 0 32px;
  background-color: ${Color.WHITE_HEADER};
  ${Media.MD} {
    grid-template-columns: 1fr 1fr;
    padding: 0 22px;
  }
  ${Media.XS} {
    padding: 0 12px;
  }
`;

const StyledNavLink = styled(Link)`
  width: 157px;
  padding: 20px 0;
  border-radius: 4.67px;
`;

const StyledSearch = styled(Search)`
  justify-self: end;
  width: 100%;
  background-color: ${Color.EXTRA_LIGHT};
`;

export { Navigation, StyledNavLink, StyledSearch };

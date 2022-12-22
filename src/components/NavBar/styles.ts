import styled from "styled-components";
import { Color } from "../../ui";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Search } from "../Search/Search";

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  align-items: center;
  height: 96px;
  padding: 0 5px;
  background-color: ${Color.WHITE_HEADER};
`;

const StyledLogo = styled(Logo)`
  max-width: 157px;
`;

const StyledSearch = styled(Search)`
  justify-self: end;
`;

export { Navigation, StyledLogo, StyledSearch };

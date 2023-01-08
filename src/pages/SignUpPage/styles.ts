import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H1 } from "ui";

const StyledLink = styled(Link)`
  padding: 16px;
  font-size: 18px;
  color: ${Color.WHITE} !important;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
`;

const SigUpTitle = styled.h1`
  ${H1}
  padding: 32px 0 56px 0;
`;

export { StyledLink, SigUpTitle };

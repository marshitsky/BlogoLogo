import { StyledLink } from "pages/SignUpPage/styles";
import styled from "styled-components";
import { H1, H2, Media } from "ui";

const StyledWrapper = styled.div``;

const SLink = styled(StyledLink)``;

const SigInTitle = styled.h1`
  ${H1}
  padding: 32px 0 56px 0;
  ${Media.LG} {
    ${H2}
  }
`;

export { StyledWrapper, StyledLink, SigInTitle, SLink };

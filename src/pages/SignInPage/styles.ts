import { StyledLink } from "pages/SignUpPage/styles";
import styled from "styled-components";
import { H1, H2, Media } from "ui";

const StyledWrapper = styled.div`
  display: grid;
  place-items: center start;
  ${Media.MD} {
    width: 100%;
  }
`;

const SLink = styled(StyledLink)`
  text-align: start !important;
  ${Media.MD} {
    font-size: 14px;
  }
`;

const SigInTitle = styled.h1`
  ${H1}
  padding: 32px 0 56px 0;
  ${Media.LG} {
    ${H2}
    padding: 32px 0 32px 0;
  }
`;

export { StyledWrapper, StyledLink, SigInTitle, SLink };

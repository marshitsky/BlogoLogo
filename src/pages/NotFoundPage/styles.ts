import { Link } from "react-router-dom";
import styled from "styled-components";
import { H1, H2, S1 } from "ui";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const NotFoundTitle = styled.p`
  ${H1}
`;

const NotFoundSubTitle = styled.h2`
  ${H2}
`;

const StyledLink = styled(Link)`
  ${S1};
  text-decoration: underline;
`;

export { NotFoundWrapper, NotFoundTitle, NotFoundSubTitle, StyledLink };

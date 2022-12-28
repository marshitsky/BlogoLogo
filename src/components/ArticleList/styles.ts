import styled from "styled-components";
import { Media } from "ui";

const ListWrapper = styled.div`
  align-self: center;
`;

const ErrorMessage = styled.span`
  font-size: 35px;
`;

const StyledArticlesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  padding-top: 64px;
  ${Media.LG} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${Media.SM} {
    grid-template-columns: 1fr;
  }
`;

export { StyledArticlesList, ListWrapper, ErrorMessage };

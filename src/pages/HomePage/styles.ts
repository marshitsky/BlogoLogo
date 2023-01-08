import styled from "styled-components";
import { H1, H2, Media } from "ui";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePageHeader = styled.div`
  width: 1120px;
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
`;

const Title = styled.h1`
  ${H1};
  text-align: start;
  ${Media.SM} {
    ${H2}
  }
`;

export { HomePageHeader, Title, HomePageWrapper };

import styled from "styled-components";
import { H1 } from "ui";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePageHeader = styled.div`
  width: clamp(270px, 100%, 1110px);
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
`;

const Title = styled.h1`
  ${H1};
  text-align: start;
`;

export { HomePageHeader, Title, HomePageWrapper };

import styled from "styled-components";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const OutletWrapper = styled.div`
  flex-grow: 1;
  display: grid;
  place-items: center center;
`;

export { StyledMainTemplate, OutletWrapper };

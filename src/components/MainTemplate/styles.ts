import styled from "styled-components";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const OutletWrapper = styled.div`
  max-width: 1110px;
  flex-grow: 1;
  display: grid;
  margin: 0 auto;
  padding: 0 40px;
`;

export { StyledMainTemplate, OutletWrapper };

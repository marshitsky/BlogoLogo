import styled from "styled-components";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledOutlet = styled.div`
  flex-grow: 1;
  max-width: 1120px;
  margin: 0 auto;
`;

export { StyledMainTemplate, StyledOutlet };

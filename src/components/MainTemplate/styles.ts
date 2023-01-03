import styled from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const OutletWrapper = styled.div`
  display: grid;
  place-self: center;
  max-width: 1110px;
  flex-grow: 1;
  padding: 72px 40px;
  ${Media.MD} {
    padding: 72px 24px;
  }
`;

export { StyledMainTemplate, OutletWrapper };

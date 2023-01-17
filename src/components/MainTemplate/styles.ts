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
  flex-grow: 1;
  max-width: 1110px;
  padding: 72px 40px;
  ${Media.LG} {
    padding: 44px 24px;
  }
`;

export { StyledMainTemplate, OutletWrapper };

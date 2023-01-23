import styled from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const OutletWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  flex-grow: 1;
  width: 1110px;
  width: 100%;
  padding: 72px 0 30px 0;
  ${Media.XL} {
    padding: 32px 26px 22px 26px;
  }
`;

export { StyledMainTemplate, OutletWrapper };

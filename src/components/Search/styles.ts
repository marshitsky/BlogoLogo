import styled from "styled-components";
import { Color } from "ui";

const StyledInput = styled.input`
  height: 100%;
  padding: 0 32px;
  border: 1px solid rgb(15, 44, 148, 0.1);
  font-size: 16px;
  color: ${Color.FOOTER_FONT_COLOR};
  background-color: ${Color.EXTRA_LIGHT};
  &::-webkit-search-cancel-button {
    color: #000;
  }
`;

export { StyledInput };

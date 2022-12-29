import styled from "styled-components";
import { Color } from "ui";

const InputWrapper = styled.div`
  width: 100%;
  height: 67%;
`;

const StyledInput = styled.input`
  align-self: center;
  width: 100%;
  height: 100%;
  padding: 0 32px;
  font-size: 16px;
  border: 1px solid rgb(15, 44, 148, 0.1);
  border-radius: 8px;
  color: ${Color.FOOTER_FONT_COLOR};
  background-color: ${Color.EXTRA_LIGHT};
  &::-webkit-search-cancel-button {
    color: #000;
  }
`;

export { StyledInput, InputWrapper };

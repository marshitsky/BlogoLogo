import styled from "styled-components";
import { Color } from "ui";

const StyledForm = styled.form`
  justify-self: center;
  height: 100%;
  width: 100%;
`;

const InputWrapper = styled.div`
  height: 100%;
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
`;

const SubmitButton = styled.button`
  display: none;
`;

export { StyledForm, StyledInput, InputWrapper, SubmitButton };

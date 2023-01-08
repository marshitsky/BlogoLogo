import { StyledSigningForm } from "components/SignInForm/styles";
import styled from "styled-components";
import { B1, Color } from "ui";

const StyledResetForm = styled(StyledSigningForm)``;

const ResetLabel = styled.h2`
  ${B1};
`;

const ResetInput = styled.input`
  height: 56px;
  padding: 20px;
  background-color: ${Color.WHITE_HEADER};
  border-radius: 4px;
`;

const ResetButton = styled.button`
  padding: 16px;
  font-size: 18px;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
`;

export { StyledResetForm, ResetLabel, ResetInput, ResetButton };

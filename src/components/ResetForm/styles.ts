import styled from "styled-components";
import { B1, Color, Media } from "ui";

const StyledResetForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 688px;
  padding: 40px;
  background-color: ${Color.WHITE_BACKGROUND};
  border-radius: 16px;
  border: 1px solid ${Color.PRIMARY};
  ${Media.LG} {
    width: 624px;
  }
  ${Media.MD} {
    width: 272px;
    padding: 24px;
  }
`;

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

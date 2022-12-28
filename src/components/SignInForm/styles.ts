import { Form, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledSigningForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: clamp(272px, 724px, 100%);
  padding: 40px;
  background-color: ${Color.WHITE_BACKGROUND};
  border-radius: 16px;
  border: 1px solid ${Color.PRIMARY};
`;

const SignInLabel = styled.p`
  font-weight: 600;
`;

const SignInInput = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 20px;
  margin-top: 8px;
  background-color: ${Color.WHITE_HEADER};
  border-radius: 4px;
`;

const SignInButton = styled.button`
  padding: 16px;
  font-size: 18px;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
`;

const SignInText = styled.span`
  color: ${Color.FOOTER_FONT_COLOR};
  text-align: center;
`;

const SignInNavLink = styled(NavLink)`
  font-weight: 500;
  color: ${Color.PRIMARY};
  &:hover {
    color: ${Color.PRIMARY};
    text-decoration: underline;
  }
`;

export { StyledSigningForm, SignInLabel, SignInInput, SignInButton, SignInText, SignInNavLink };

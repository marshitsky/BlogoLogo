import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledSigningForm = styled.form`
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
  }
`;

const SignInLabel = styled.p`
  font-weight: 600;
`;

const SignInInput = styled.input`
  height: 56px;
  padding-left: 20px;
  background-color: ${Color.WHITE_HEADER};
  border-radius: 4px;
`;

const SignInButton = styled.button`
  padding: 16px;
  font-size: 18px;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
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

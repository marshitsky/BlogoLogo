import { Link } from "react-router-dom";
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  ${Media.LG} {
    max-width: 624px;
  }
  ${Media.MD} {
    width: 272px;
  }
`;

const SignInLabel = styled.h1`
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

const StyledLink = styled(Link)`
  font-weight: 500;
  color: ${Color.PRIMARY} !important;
  text-decoration: underline;
  &:hover {
    color: ${Color.PRIMARY};
    text-decoration: underline;
  }
`;

export { StyledSigningForm, SignInLabel, SignInInput, SignInButton, SignInText, StyledLink };

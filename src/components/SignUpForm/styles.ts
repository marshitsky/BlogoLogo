import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledSigningUpForm = styled.form`
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
const SignUpLabel = styled.p`
  font-weight: 600;
`;
const SignUpInput = styled.input`
  height: 56px;
  padding-left: 20px;
  background-color: ${Color.WHITE_HEADER};
  border-radius: 4px;
`;
const SignUpButton = styled.button`
  padding: 16px;
  font-size: 18px;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
`;
const SignUpText = styled.span`
  color: ${Color.FOOTER_FONT_COLOR};
  text-align: center;
`;
const SignUpNavLink = styled(NavLink)`
  font-weight: 500;
  color: ${Color.PRIMARY};
  &:hover {
    color: ${Color.PRIMARY};
    text-decoration: underline;
  }
`;

export { StyledSigningUpForm, SignUpLabel, SignUpInput, SignUpButton, SignUpText, SignUpNavLink };

import { SignInButton } from "components/SignInForm/styles";
import styled from "styled-components";
import { Color, H2, Media } from "ui";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: transparent;
`;

const ModalInformation = styled.div`
  display: grid;
  place-items: center center;
  max-width: 600px;
  max-height: 400px;
  padding: 2rem;
  background-color: ${Color.WHITE_BACKGROUND};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const AuthText = styled.p`
  ${H2}
  padding-bottom: 20px;
  color: ${Color.FONT_COLOR};
  text-align: center;
  ${Media.MD} {
    font-size: 20px !important;
    line-height: 120%;
  }
`;

const Button = styled(SignInButton)``;

export { Container, ModalInformation, AuthText, Button };

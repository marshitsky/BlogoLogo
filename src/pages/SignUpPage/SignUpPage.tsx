import { SignUpForm } from "components";
import { StyledWrapper } from "pages/SignInPage/styles";
import { ROUTE } from "router";
import { SigUpTitle, StyledLink } from "./styles";

export const SignUpPage = () => {
  return (
    <StyledWrapper>
      <StyledLink to={ROUTE.HOME}>Back to home</StyledLink>
      <SigUpTitle>Sign Up</SigUpTitle>
      <SignUpForm />
    </StyledWrapper>
  );
};

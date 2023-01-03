import { SignInForm } from "components";
import { ROUTE } from "router";
import { SigInTitle, StyledLink, StyledWrapper } from "./styles";

export const SignInPage = () => {
  return (
    <StyledWrapper>
      <StyledLink to={ROUTE.HOME}>Back to home</StyledLink>
      <SigInTitle>Sign In</SigInTitle>
      <SignInForm />
    </StyledWrapper>
  );
};

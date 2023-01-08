import { SignInForm } from "components";
import { ROUTE } from "router";
import { SigInTitle, SLink, StyledWrapper } from "./styles";

export const SignInPage = () => {
  return (
    <StyledWrapper>
      <SLink to={ROUTE.HOME}>Back to home</SLink>
      <SigInTitle>Sign In</SigInTitle>
      <SignInForm />
    </StyledWrapper>
  );
};

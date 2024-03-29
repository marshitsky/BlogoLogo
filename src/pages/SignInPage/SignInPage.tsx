import { SignInForm } from "components";
import { ROUTE } from "router";
import { SigInTitle, SLink, StyledWrapper } from "./styles";

export const SignInPage = () => {
  return (
    <StyledWrapper initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}>
      <SLink to={ROUTE.HOME}>Back to home</SLink>
      <SigInTitle>Sign In</SigInTitle>
      <SignInForm />
    </StyledWrapper>
  );
};

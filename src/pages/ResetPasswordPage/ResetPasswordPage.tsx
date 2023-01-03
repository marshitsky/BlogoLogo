import { ResetForm } from "components";
import { ROUTE } from "router";
import { ResetPage, ResetPageTitle, StyledLink } from "./styles";

export const ResetPasswordPage = () => {
  return (
    <ResetPage>
      <StyledLink to={ROUTE.HOME}>Back to home</StyledLink>
      <ResetPageTitle>Reset Password</ResetPageTitle>
      <ResetForm />
    </ResetPage>
  );
};

import { ResetForm } from "components";
import { ROUTE } from "router";
import { ResetPage, ResetPageTitle, SLink } from "./styles";

export const ResetPasswordPage = () => {
  return (
    <ResetPage>
      <SLink to={ROUTE.HOME}>Back to home</SLink>
      <ResetPageTitle>Reset Password</ResetPageTitle>
      <ResetForm />
    </ResetPage>
  );
};

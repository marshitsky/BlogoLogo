import { SignInButton } from "components/SignInForm/styles";
import styled from "styled-components";
import { H2, Media, S1 } from "ui";

const AccountPageWrapper = styled.div`
  place-self: center;
  padding: 35px;
  text-align: center;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  ${Media.MD} {
    padding: 15px;
  }
`;
const AccountPageTitle = styled.h1`
  ${H2}
  padding-bottom: 20px;
  font-size: 42px !important;
  text-decoration: underline;
  ${Media.MD} {
    font-size: 26px !important;
  }
`;
const Subtitle = styled.h3`
  ${H2}
  padding: 20px 0;
  ${Media.MD} {
    ${S1}
    padding: 5px 0;
  }
`;

const LogOutButton = styled(SignInButton)`
  margin-top: 15px;
  ${Media.MD} {
    font-size: 14px;
  }
`;
export { AccountPageWrapper, AccountPageTitle, Subtitle, LogOutButton };

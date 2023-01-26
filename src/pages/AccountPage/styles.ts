import { SignInButton } from "components/SignInForm/styles";
import styled from "styled-components";
import { H2, H3, Media, S1 } from "ui";

const AccountPageWrapper = styled.div`
  place-self: center;
  padding: 45px;
  text-align: start;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  ${Media.MD} {
    padding: 25px;
  }
`;
const AccountPageTitle = styled.h1`
  padding-bottom: 15px;
  font-size: 36px;
  ${Media.MD} {
    font-size: 26px;
  }
`;
const Subtitle = styled.h3`
  padding: 12px 0;
  font-size: 26px;
  ${Media.MD} {
    padding: 5px 0;
    font-size: 20px;
  }
`;

const LogOutButtonWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const LogOutButton = styled(SignInButton)`
  margin-top: 15px;
  ${Media.MD} {
    font-size: 14px;
  }
`;
export { AccountPageWrapper, AccountPageTitle, Subtitle, LogOutButtonWrapper, LogOutButton };

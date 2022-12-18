import React from "react";
import { UserAccount } from "../UserAccount/UserAccount";
import { Navigation } from "./styles";
import { StyledLogo, Text } from "./styles";

export const NavBar = () => {
  return (
    <Navigation>
      <StyledLogo />
      <Text>NAV BAR</Text>
      <UserAccount />
    </Navigation>
  );
};

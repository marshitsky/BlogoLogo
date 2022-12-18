import React from "react";
import { UserAccount } from "../UserAccount/UserAccount";
import { Navigation, StyledSearch } from "./styles";
import { StyledLogo } from "./styles";

export const NavBar = () => {
  return (
    <Navigation>
      <>
        <StyledLogo />
        <StyledSearch />
      </>
      <UserAccount />
    </Navigation>
  );
};

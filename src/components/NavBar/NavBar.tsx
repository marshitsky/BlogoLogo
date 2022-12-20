import React from "react";
import { UserAccount } from "../../components";
import { Navigation, StyledSearch, StyledLogo } from "./styles";

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

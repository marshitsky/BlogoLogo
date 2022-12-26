import React from "react";
import { UserAccount } from "components";
import { Navigation, StyledNavLink, StyledSearch } from "./styles";
import { ROUTE } from "router";
import { Logo } from "assets/img";

export const NavBar = () => {
  return (
    <Navigation>
      <StyledNavLink to={ROUTE.HOME}>
        <Logo />
      </StyledNavLink>
      <StyledSearch placeholder="Search ..." type={"text"} />
      <UserAccount />
    </Navigation>
  );
};

import React from "react";
import { UserAccount } from "../../components";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Navigation, StyledNavLink, StyledSearch } from "./styles";
import { ROUTE } from "../../router/routes";

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

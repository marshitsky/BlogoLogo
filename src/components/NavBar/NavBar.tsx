import React from "react";
import { Search, UserAccount } from "components";
import { Navigation, StyledNavLink } from "./styles";
import { ROUTE } from "router";
import { Logo } from "assets/img";
import { useWindowSize } from "hooks";
import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";

export const NavBar = () => {
  const { width = 0 } = useWindowSize();

  return (
    <Navigation>
      <StyledNavLink to={ROUTE.HOME}>
        <Logo />
      </StyledNavLink>
      {width >= 568 ? (
        <>
          <Search placeholder="Search ..." type={"text"} />
          <UserAccount />
        </>
      ) : (
        <BurgerMenu />
      )}
    </Navigation>
  );
};

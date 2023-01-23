import { Search, ThemeToggler } from "components";
import { UserAccount } from "components";
import React from "react";
import { ROUTE } from "router";
import { SearchWrapper, StyledFavoritesLink, StyledNav } from "./styles";

interface IProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  idle: {},
};

export const NavBarMenu = ({ isMobile, isOpen, handleClose }: IProps) => {
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";

  return (
    <StyledNav animate={currentVariant} variants={menuVariants} initial="idle">
      {isMobile ? <SearchWrapper>
        <Search placeholder="Search ..." type={"text"} onClick={handleClose} />
      </SearchWrapper> :  <Search placeholder="Search ..." type={"text"} onClick={handleClose} />}
      <StyledFavoritesLink to={ROUTE.FAVORITES} onClick={handleClose}>
        Favorites
      </StyledFavoritesLink>
      <UserAccount handleClose={handleClose} />
      {isMobile && <ThemeToggler/>}
    </StyledNav>
  );
};

import { FavoritesIcon } from "assets";
import { Search, ThemeToggler } from "components";
import { UserAccount } from "components";
import React, { memo } from "react";
import { ROUTE } from "router";
import { SearchWrapper, StyledFavoritesLink, StyledNav } from "./styles";

interface IProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -2000 },
  idle: {},
};

export const NavBarMenu = memo(({ isMobile, isOpen, handleClose }: IProps) => {
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";

  return (
    <StyledNav animate={currentVariant} variants={menuVariants} initial="idle">
      {isMobile ? (
        <SearchWrapper>
          <Search placeholder="Search ..." type={"text"} onClick={handleClose} />
        </SearchWrapper>
      ) : (
        <Search placeholder="Search ..." type={"text"} onClick={handleClose} />
      )}
      <StyledFavoritesLink to={ROUTE.FAVORITES} onClick={handleClose}>
        {isMobile ? <span>Favorites</span> : <FavoritesIcon />}
      </StyledFavoritesLink>
      <UserAccount handleClose={handleClose} />
      {isMobile && <ThemeToggler />}
    </StyledNav>
  );
});

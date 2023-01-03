import { ThemeToggler } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "router";

import { StyledFooter, CopyRight } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <CopyRight>©2022 Blogologo</CopyRight>
      <Link to={ROUTE.ACCOUNT}>Account</Link>
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
      <ThemeToggler />
    </StyledFooter>
  );
};

import { ThemeToggler } from "components";

import { StyledFooter, CopyRight } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <CopyRight>©2022 Blogologo</CopyRight>
      <ThemeToggler />
    </StyledFooter>
  );
};

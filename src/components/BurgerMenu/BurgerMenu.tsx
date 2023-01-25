import { BurgerCloseIcon, BurgerOpenIcon } from "assets";
import { memo } from "react";
import { StyledBurgerMenu } from "./styles";

interface IProps {
  toggleMenu: () => void;
  isActive: boolean;
}

export const BurgerMenu = memo(({ toggleMenu, isActive }: IProps) => {
  isActive ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");

  return (
    <StyledBurgerMenu onClick={toggleMenu}>
      {isActive ? <BurgerCloseIcon /> : <BurgerOpenIcon />}
    </StyledBurgerMenu>
  );
});

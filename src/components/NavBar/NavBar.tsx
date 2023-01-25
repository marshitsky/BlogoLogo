import { NavBarMenu, BurgerMenu } from "components";
import { Navigation, StyledNavLink } from "./styles";
import { ROUTE } from "router";
import { Logo } from "assets";
import { useToggle, useWindowSize } from "hooks";

export const NavBar = () => {
  const [isActive, setIsActive] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width <= 568;

  return (
    <Navigation>
      <StyledNavLink to={ROUTE.HOME}>
        <Logo />
      </StyledNavLink>
      <NavBarMenu isOpen={isActive} isMobile={isMobile} handleClose={setIsActive} />
      {isMobile && <BurgerMenu toggleMenu={setIsActive} isActive={isActive} />}
    </Navigation>
  );
};

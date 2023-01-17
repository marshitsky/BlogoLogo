import { BurgerCloseIcon, BurgerOpenIcon } from "assets/icons";
import { useToggle } from "hooks";
import { ROUTE } from "router";
import { Favorites, Menu, StyledBurgerMenu, StyledSearch } from "./styles";

export const BurgerMenu = () => {
  const [isActive, setIsActive] = useToggle(false);

  const handleBurgerMenu = () => {
    setIsActive();
  };

  return (
    <>
      <StyledBurgerMenu onClick={handleBurgerMenu}>
        {isActive ? <BurgerCloseIcon /> : <BurgerOpenIcon />}
      </StyledBurgerMenu>
      {isActive && (
        <Menu>
          <StyledSearch
            placeholder="Search..."
            type="search"
            // onClick={() => handleBurgerMenu}
          />
          <Favorites to={`/${ROUTE.FAVORITES}`}>Favorites</Favorites>
        </Menu>
      )}
    </>
  );
};

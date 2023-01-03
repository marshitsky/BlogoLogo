import { StyledNavLink, UserInfo } from "./styles";
import { NavLink } from "react-router-dom";
import { SignInIcon } from "assets/icons";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";

export const UserAccount = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);
  return (
    <div>
      {isAuth ? (
        <UserInfo>
          <NavLink to={ROUTE.ACCOUNT}>{name}</NavLink>
        </UserInfo>
      ) : (
        <UserInfo>
          <SignInIcon />
          <StyledNavLink to={ROUTE.SIGN_IN}>Sign In</StyledNavLink>
        </UserInfo>
      )}
    </div>
  );
};

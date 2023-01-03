import { StyledInitials, StyledNavLink, UserInfo } from "./styles";
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
          <StyledInitials>
            {name &&
              name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
          </StyledInitials>
          <NavLink to={ROUTE.ACCOUNT}>
            {name &&
              name
                .split(" ")
                .map((n) => n[0].toUpperCase() + n.slice(1))
                .join(" ")}
          </NavLink>
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

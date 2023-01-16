import { StyledIcon, StyledInitials, StyledNavLink, UserInfo } from "./styles";
import { NavLink } from "react-router-dom";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";

export const UserAccount = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);

  return (
    <>
      {" "}
      {isAuth ? (
        <UserInfo>
          <StyledInitials>
            {name && name.split(" ").length > 1
              ? name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()
              : name && name.split(" ").length < 2
                ? name[0].toUpperCase()
                : ""}
          </StyledInitials>
          <NavLink to={ROUTE.ACCOUNT}>
            {name && name.split(" ").length > 1
              ? name
                .split(" ")
                .map((n: string) => n[0].toUpperCase() + n.slice(1))
                .join(" ")
              : name && name.split(" ").length < 2
                ? name[0].toUpperCase() + name.substring(1, name.length)
                : " "}
          </NavLink>
        </UserInfo>
      ) : (
        <UserInfo>
          <StyledIcon />
          <StyledNavLink to={ROUTE.SIGN_IN}>Sign In</StyledNavLink>
        </UserInfo>
      )}
    </>
  );
};

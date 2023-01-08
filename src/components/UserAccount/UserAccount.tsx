import { StyledIcon, StyledInitials, StyledNavLink, UserInfo } from "./styles";
import { NavLink } from "react-router-dom";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";

export const UserAccount = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  const userName = JSON.parse(localStorage.getItem("userInfo")!);

  return (
    <>
      {" "}
      {isAuth ? (
        <UserInfo>
          <StyledInitials>
            {userName !== null &&
              userName.map(({ name }: any) =>
                name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase(),
              )}
          </StyledInitials>
          <NavLink to={ROUTE.ACCOUNT}>
            {userName !== null &&
              userName.map(({ name }: any) =>
                name
                  .split(" ")
                  .map((n: string) => n[0].toUpperCase() + n.slice(1))
                  .join(" "),
              )}
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

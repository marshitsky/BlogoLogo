import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getUserInfo, useAppDispatch, useAppSelector } from "store";
import { getLogOut } from "store/slices/usersSlice/usersSlice";
import { AccountPageTitle, AccountPageWrapper, LogOutButton, Subtitle } from "./styles";

export const AccountPage = () => {
  const { email } = useAppSelector(getUserInfo);
  const userName = JSON.parse(localStorage.getItem("userInfo")!);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(getLogOut(false));
    navigate(ROUTE.HOME);
  };

  return (
    <AccountPageWrapper>
      <AccountPageTitle>User Account Info</AccountPageTitle>
      <Subtitle>
        Username:{" "}
        {userName !== null &&
          userName.map(({ name }: any) =>
            name
              .split(" ")
              .map((n: string) => n[0].toUpperCase() + n.slice(1))
              .join(" "),
          )}
      </Subtitle>
      <Subtitle>Email: {email}</Subtitle>
      <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
    </AccountPageWrapper>
  );
};

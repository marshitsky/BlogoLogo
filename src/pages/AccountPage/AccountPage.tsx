import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { getLogOut } from "store/slices/usersSlice/usersSlice";
import { AccountPageTitle, AccountPageWrapper, LogOutButton, Subtitle } from "./styles";

export const AccountPage = () => {
  const userName = JSON.parse(localStorage.getItem("userInfo")!);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(getLogOut(false));
    // localStorage.setItem("userInfo");
    navigate(ROUTE.HOME);
  };

  return (
    <AccountPageWrapper>
      <AccountPageTitle>User Account Info</AccountPageTitle>
      <Subtitle>
        Username:{" "}
        {userName !== null &&
          userName.name
            .split(" ")
            .map((n: string) => n[0].toUpperCase() + n.slice(1))
            .join(" ")}
      </Subtitle>
      <Subtitle>Email: {userName !== null && userName.email}</Subtitle>
      <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
    </AccountPageWrapper>
  );
};

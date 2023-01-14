import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch, logOut } from "store";
import { AccountPageTitle, AccountPageWrapper, LogOutButton, Subtitle } from "./styles";

export const AccountPage = () => {
  const userName = JSON.parse(localStorage.getItem("userInfo")!);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userAuth = JSON.parse(localStorage.getItem("userInfo")!);
  if (userAuth) {
    userAuth.isAuth = false;
  }

  const handleLogOut = () => {
    dispatch(logOut(false));
    localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userAuth));
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

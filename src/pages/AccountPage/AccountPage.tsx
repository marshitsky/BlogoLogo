import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch, logOut } from "store";
import {
  AccountPageTitle,
  AccountPageWrapper,
  LogOutButton,
  LogOutButtonWrapper,
  Subtitle,
} from "./styles";

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
    <AccountPageWrapper initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}>
      <AccountPageTitle>Account Info:</AccountPageTitle>
      <Subtitle>
        Username:{" "}
        {userName !== null &&
          userName.name
            .replace(/  +/g, " ")
            .split(" ")
            .map((n: string) => n[0].toUpperCase() + n.slice(1))
            .join(" ")}
      </Subtitle>
      <Subtitle>Email: {userName !== null && userName.email}</Subtitle>
      <LogOutButtonWrapper>
        <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>
      </LogOutButtonWrapper>
    </AccountPageWrapper>
  );
};

import React from "react";
// import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUser } from "../../store/selectors/userSelector";
// import { toggleAuth } from "../../store/slices/userSlice/userSlice";
import { ReactComponent as SignInLogo } from "../../assets/icons/sign-in.svg";
import { UserInfo } from "./styles";
import { NavLink } from "react-router-dom";
import { ROUTE } from "../../router/routes";

export const UserAccount = () => {
  const { userName, userSurname, isAuth } = useAppSelector(getUser);
  // const dispatch = useDispatch();
  // const handleAuth = () => {
  //   dispatch(toggleAuth());
  // };
  return (
    <div>
      {isAuth ? (
        <UserInfo>
          <NavLink to={ROUTE.ACCOUNT}>{userName[0] + userSurname[0]}</NavLink>
          <p>{userName + userSurname}</p>
        </UserInfo>
      ) : (
        <UserInfo>
          <SignInLogo />
          <NavLink to={ROUTE.SIGN_IN}>Sign In</NavLink>
        </UserInfo>
      )}
    </div>
  );
};

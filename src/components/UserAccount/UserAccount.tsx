import React from "react";
// import { useDispatch } from "react-redux";
// import { toggleAuth } from "../../store/slices/userSlice/userSlice";
import { UserInfo } from "./styles";
import { NavLink } from "react-router-dom";
import { SignInIcon } from "assets/icons";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";

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
          <SignInIcon />
          <NavLink to={ROUTE.SIGN_IN}>Sign In</NavLink>
        </UserInfo>
      )}
    </div>
  );
};

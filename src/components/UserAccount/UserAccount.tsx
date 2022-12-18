import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUser } from "../../store/selectors/userSelector";
import { toggleAuth } from "../../store/slices/userSlice/userSlice";
import { UserInfo } from "./styles";

export const UserAccount = () => {
  const { userName, userSurname, isAuth } = useAppSelector(getUser);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(toggleAuth());
  };
  return (
    <div>
      {isAuth ? (
        <UserInfo>
          <p>{userName[0] + userSurname[0]}</p>
          <button onClick={handleAuth}>LogOut</button>
        </UserInfo>
      ) : (
        <UserInfo>
          <p>Not Authorized</p>
          <button onClick={handleAuth}>LogIn</button>
        </UserInfo>
      )}
    </div>
  );
};

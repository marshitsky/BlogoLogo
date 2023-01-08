import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};

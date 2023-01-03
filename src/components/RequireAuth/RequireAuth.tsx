import { MainTemplate } from "components/MainTemplate/MainTemplate";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? <MainTemplate /> : <Navigate to={ROUTE.SIGN_UP} />;
};

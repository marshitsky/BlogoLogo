import React from "react";
import { getUserInfo, useAppSelector } from "store";

export const AccountPage = () => {
  const { name } = useAppSelector(getUserInfo);
  return <div>{name}</div>;
};

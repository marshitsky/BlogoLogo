import React from "react";
import { getUserInfo, useAppSelector } from "store";
import { AccountPageTitle, AccountPageWrapper, Subtitle } from "./styles";

export const AccountPage = () => {
  const { name, email } = useAppSelector(getUserInfo);
  return (
    <AccountPageWrapper>
      <AccountPageTitle>User Account Info</AccountPageTitle>
      <Subtitle>
        Username:{" "}
        {name &&
          name
            .split(" ")
            .map((n) => n[0].toUpperCase() + n.slice(1))
            .join(" ")}
      </Subtitle>
      <Subtitle>Email: {email}</Subtitle>
    </AccountPageWrapper>
  );
};

import React from "react";
import { ROUTE } from "router";
import notFoundLogo from "../../assets/img/not-found-img.jpg";
import { NotFoundTitle, NotFoundWrapper, NotFoundSubTitle, StyledLink } from "./styles";

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Whooops!</NotFoundTitle>
      <NotFoundSubTitle>Looks like this page went on vocation.</NotFoundSubTitle>
      <StyledLink to={ROUTE.HOME}>Home</StyledLink>
      <img src={notFoundLogo} alt="notFoundLogo" />
    </NotFoundWrapper>
  );
};

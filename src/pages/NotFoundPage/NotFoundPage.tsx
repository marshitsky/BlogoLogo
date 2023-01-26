import { notFoundPageImg } from "assets";
import { ROUTE } from "router";
import { NotFoundTitle, NotFoundWrapper, NotFoundSubTitle, StyledLink } from "./styles";

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Whooops!</NotFoundTitle>
      <NotFoundSubTitle>Looks like this page went on vocation.</NotFoundSubTitle>
      <StyledLink to={ROUTE.HOME}>Home</StyledLink>
      <img src={notFoundPageImg} alt="notFoundLogo" />
    </NotFoundWrapper>
  );
};

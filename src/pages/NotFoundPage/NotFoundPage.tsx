import { notFoundPageImg } from "assets";
import { ROUTE } from "router";
import { NotFoundTitle, NotFoundWrapper, NotFoundSubTitle, StyledLink, Image } from "./styles";

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Whooops!</NotFoundTitle>
      <NotFoundSubTitle>Looks like this page went on vocation.</NotFoundSubTitle>
      <Image src={notFoundPageImg} alt="notFoundLogo" />
      <StyledLink to={ROUTE.HOME}>Back to Main</StyledLink>
    </NotFoundWrapper>
  );
};

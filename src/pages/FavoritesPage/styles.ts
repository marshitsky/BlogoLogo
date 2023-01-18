import { StyledBlogList } from "components/BlogList/styles";
import styled from "styled-components";
import { H1 } from "ui";

const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  ${H1}
`;

const FavoritesList = styled(StyledBlogList)``;

export { FavoritesWrapper, Heading, FavoritesList };

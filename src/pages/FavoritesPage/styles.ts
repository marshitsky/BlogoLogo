import { StyledBlogList } from "components/BlogList/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H1, H2, H3, Media } from "ui";

const FavoritesWrapper = styled(motion.div)`
  place-self: start center;
  text-align: center;
`;

const Heading = styled.h1`
  ${H1}
  color: ${Color.FONT_COLOR};
  text-align: center;
`;

const NoFavoritesText = styled.p`
  ${H2}
  padding-bottom: 30px;
  text-align: center;
  ${Media.MD} {
    ${H3}
  }
`;

const StyledLink = styled(Link)`
  padding: 16px;
  font-size: 18px;
  color: ${Color.WHITE} !important;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
`;

const FavoritesList = styled(StyledBlogList)``;

export { FavoritesWrapper, Heading, FavoritesList, NoFavoritesText, StyledLink };

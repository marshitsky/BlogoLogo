import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledNav = styled(motion.nav)`
  display: grid;
  grid-template-columns: 6fr auto auto;
  align-items: center;
  gap: 1rem;

  ${Media.MD} {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 30px;

    width: 100%;
    height: calc(100vh - 100px);
    background-color: ${Color.NAV};
    opacity: 1;
    transform: translateX(-100%);
  }
`;

const StyledFavoritesLink = styled(Link)`
  position: relative;
  justify-self: end;
  font-size: 16px;
  color: ${Color.FONT_COLOR} !important;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  text-align: center;
  ${Media.MD} {
    margin-top: 20px;
  }
`;

export { StyledNav, StyledFavoritesLink, SearchWrapper };

import styled from "styled-components";
import { motion } from "framer-motion";
import { Color, Media } from "ui";

const StyledArticleListItem = styled(motion.div)`
  position: relative;
  max-width: 352px;
  min-width: 250px;
  width: 100%;
  height: 388px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px, rgba(0, 0, 0, 0.24) 0px -12px 30px,
      rgba(0, 0, 0, 0.24) 0px 4px 6px, rgba(0, 0, 0, 0.34) 0px 12px 13px,
      rgba(0, 0, 0, 0.18) 0px -3px 5px;
  }
  ${Media.XL} {
    width: 328px;
  }
  ${Media.SM} {
    width: 272px;
  }
`;

const CardWrapper = styled.div`
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 208px;
`;

const Image = styled.img`
  width: 100%;
  height: 208px;
  object-fit: cover;
  object-position: 50% 20%;
  filter: grayscale(0.74);
  opacity: 0.84;
  transition: 0.4s ease-in-out;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const InfoWrapper = styled.div`
  padding: 32px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.FONT_COLOR};
`;

const PublishDate = styled.p`
  text-align: start;
  font-size: 14px;
  color: ${Color.FOOTER_FONT_COLOR};
`;

const FavoritesBtn = styled.button`
  position: absolute;
  top: 45%;
  right: 3%;
  font-size: 1.5rem;
  color: ${Color.WHITE};
`;

export {
  StyledArticleListItem,
  CardWrapper,
  ImageWrapper,
  Image,
  Title,
  InfoWrapper,
  PublishDate,
  FavoritesBtn,
};

import styled from "styled-components";
import { Color, Media } from "ui";

const StyledArticleListItem = styled.div`
  max-width: 352px;
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

const Image = styled.img`
  width: 100%;
  height: 208px;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  filter: grayscale(0.74);
  opacity: 0.84;
  transition: 0.4s ease-in-out;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const Title = styled.h2`
  padding: 0 32px 32px 32px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.FONT_COLOR};
`;

const PublishDate = styled.p`
  padding: 32px 0 8px 32px;
  text-align: start;
  font-size: 14px;
  color: ${Color.FOOTER_FONT_COLOR};
`;

export { StyledArticleListItem, Image, Title, PublishDate };

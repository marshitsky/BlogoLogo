import React from "react";
import { useNavigate } from "react-router-dom";
import { IBlogItem } from "types";
import { HomeLink, LinkWrapper, NewsImage, NewsText, NewsTitle, StyledLink } from "./styles";

interface IProps {
  news: IBlogItem;
}

export const NewsContent = ({ news }: IProps) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  const { id, imageUrl, title, summary, url } = news;

  return (
    <>
      <HomeLink onClick={handleBackHome}>Home </HomeLink>
      <span> / Post {id}</span>
      <NewsTitle>{title}</NewsTitle>
      <NewsImage src={imageUrl} alt="article-img" />
      <NewsText>{summary}</NewsText>
      <LinkWrapper>
        <StyledLink href={url} target="_blank">
          Original source
        </StyledLink>
      </LinkWrapper>
    </>
  );
};

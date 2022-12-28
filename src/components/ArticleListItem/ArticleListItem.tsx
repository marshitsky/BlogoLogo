import React from "react";
import { IArticle } from "types";
import { StyledArticleListItem, Image, Title, PublishDate } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticleListItem = ({ article }: IProps) => {
  const { imageUrl, publishedAt, title } = article;
  const date = new Date(publishedAt).toLocaleString().slice(0, -3);
  return (
    <StyledArticleListItem>
      <Image src={imageUrl} alt={title} />
      <PublishDate>{date}</PublishDate>
      <Title>{title}</Title>
    </StyledArticleListItem>
  );
};

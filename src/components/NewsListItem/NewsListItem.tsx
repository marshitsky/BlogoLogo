import {
  PublishDate,
  StyledArticleListItem,
  Title,
  Image,
} from "components/ArticleListItem/styles";
import React from "react";
import { INews } from "types";

interface IProps {
  news: INews;
}

export const NewsListItem = ({ news }: IProps) => {
  const { imageUrl, publishedAt, title } = news;
  const date = new Date(publishedAt).toLocaleString().slice(0, -3);
  return (
    <StyledArticleListItem>
      <Image src={imageUrl} alt={title} />
      <PublishDate>{date}</PublishDate>
      <Title>{title}</Title>
    </StyledArticleListItem>
  );
};

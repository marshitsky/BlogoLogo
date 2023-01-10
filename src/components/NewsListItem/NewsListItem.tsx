import {
  PublishDate,
  StyledArticleListItem,
  Title,
  Image,
} from "components/ArticleListItem/styles";
import React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { INews } from "types";

interface IProps {
  news: INews;
}

export const NewsListItem = ({ news }: IProps) => {
  const { imageUrl, publishedAt, title } = news;
  const date = new Date(publishedAt).toLocaleString().slice(0, -3);

  return (
    <StyledArticleListItem>
      <Link to={generatePath("../" + ROUTE.NEWS_CONTENT, { id: `${news.id}` })}>
        <Image src={imageUrl} alt={title} />
        <PublishDate>{date}</PublishDate>
        <Title>{title}</Title>
      </Link>
    </StyledArticleListItem>
  );
};

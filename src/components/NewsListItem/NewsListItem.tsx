import {
  PublishDate,
  StyledArticleListItem,
  Title,
  Image,
  FavoritesBtn,
} from "components/ArticleListItem/styles";
import React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IBlogItem } from "types";

interface IProps {
  news: IBlogItem;
  onClick: (news: IBlogItem) => void;
  isFavorite?: boolean;
}

export const NewsListItem = ({ news, onClick, isFavorite }: IProps) => {
  const { imageUrl, publishedAt, title } = news;

  const handleFavorite = () => {
    onClick(news);
  };

  const date = new Date(publishedAt);
  const m = date.toLocaleString("en-us", { month: "long" });
  const d = date.getDate();
  const y = date.getFullYear();
  const printDate =
    m[0].toUpperCase() + m.slice(1, m.length) + " " + (d <= 9 ? "0" + d : d) + ", " + y;

  return (
    <StyledArticleListItem>
      <Link to={generatePath("../" + ROUTE.NEWS_CONTENT, { id: `${news.id}` })}>
        <Image src={imageUrl} alt={title} />
        <PublishDate>{printDate}</PublishDate>
        <Title>{title.length > 70 ? title.slice(0, 70) + "..." : title}</Title>
      </Link>
      <FavoritesBtn onClick={handleFavorite}>{isFavorite ? "💘" : "❤"}</FavoritesBtn>
    </StyledArticleListItem>
  );
};

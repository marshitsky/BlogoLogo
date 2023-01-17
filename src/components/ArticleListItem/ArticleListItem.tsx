import React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IArticle } from "types";
import { StyledArticleListItem, Image, Title, PublishDate, FavoritesBtn } from "./styles";

interface IProps {
  article: IArticle;
  onClick: (article: IArticle) => void;
  isFavorite?: boolean;
}

export const ArticleListItem = ({ article, onClick, isFavorite }: IProps) => {
  const { imageUrl, publishedAt, title } = article;

  const handleFavorite = () => {
    onClick(article);
  };

  const date = new Date(publishedAt);
  const m = date.toLocaleString("en-us", { month: "long" });
  const d = date.getDate();
  const y = date.getFullYear();
  const printDate =
    m[0].toUpperCase() + m.slice(1, m.length) + " " + (d <= 9 ? "0" + d : d) + ", " + y;

  return (
    <StyledArticleListItem>
      <Link to={generatePath("../" + ROUTE.CONTENT, { id: `${article.id}` })}>
        <Image src={imageUrl} alt={title} />
        <PublishDate>{printDate}</PublishDate>
        <Title>{title.length > 70 ? title.slice(0, 70) + "..." : title}</Title>
      </Link>
      <FavoritesBtn onClick={handleFavorite}>{isFavorite ? "💘" : "❤"}</FavoritesBtn>
    </StyledArticleListItem>
  );
};

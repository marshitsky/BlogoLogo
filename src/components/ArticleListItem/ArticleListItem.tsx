import React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { addToFavorite, useAppDispatch } from "store";
import { IArticle } from "types";
import { StyledArticleListItem, Image, Title, PublishDate, FavoritesBtn } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticleListItem = ({ article }: IProps) => {
  const { imageUrl, publishedAt, title } = article;
  const dispatch = useAppDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorite(article));
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
      <FavoritesBtn onClick={handleAddToFavorites}>❤</FavoritesBtn>
    </StyledArticleListItem>
  );
};

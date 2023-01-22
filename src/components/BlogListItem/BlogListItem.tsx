import React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { getFavotites, useAppSelector } from "store";
import { IBlogItem } from "types";
import {
  StyledArticleListItem,
  Image,
  Title,
  PublishDate,
  FavoritesBtn,
  ImageWrapper,
  InfoWrapper,
} from "./styles";

interface IProps {
  blog: IBlogItem;
  onClick: (article: IBlogItem) => void;
  isFavorite?: boolean;
}

export const BlogListItem = ({ blog, onClick, isFavorite }: IProps) => {
  const { imageUrl, publishedAt, title } = blog;
  const { results } = useAppSelector(getFavotites);
  const isFav = results.map((fav) => fav.id).some((a) => a === blog.id);

  const handleFavorite = () => {
    onClick(blog);
  };

  const date = new Date(publishedAt);
  const m = date.toLocaleString("en-us", { month: "long" });
  const d = date.getDate();
  const y = date.getFullYear();
  const printDate =
    m[0].toUpperCase() + m.slice(1, m.length) + " " + (d <= 9 ? "0" + d : d) + ", " + y;

  return (
    <StyledArticleListItem>
      <Link to={generatePath(ROUTE.HOME + ROUTE.CONTENT, { id: `${blog.id}` })}>
        <ImageWrapper>
          <Image src={imageUrl} alt={title} />
        </ImageWrapper>
        <InfoWrapper>
          <PublishDate>{printDate}</PublishDate>
          <Title>{title.length > 70 ? title.slice(0, 70) + "..." : title}</Title>
        </InfoWrapper>
      </Link>
      <FavoritesBtn onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</FavoritesBtn>
    </StyledArticleListItem>
  );
};
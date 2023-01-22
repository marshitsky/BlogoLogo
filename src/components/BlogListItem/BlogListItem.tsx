import { format } from "fecha";
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
  blogItem: IBlogItem;
  onClick: (blogItem: IBlogItem) => void;
  isFavorite?: boolean;
}

export const BlogListItem = ({ blogItem, onClick, isFavorite }: IProps) => {
  const { imageUrl, publishedAt, title, id } = blogItem;
  const { results } = useAppSelector(getFavotites);

  const isInFavorites = results.map((favorite) => favorite.id).some((favorite) => favorite === id);

  const handleChangeFavorites = () => {
    onClick(blogItem);
  };

  const printDate = format(new Date(publishedAt), "MMMM D, YYYY");

  return (
    <StyledArticleListItem>
      <Link
        to={generatePath(ROUTE.HOME + ROUTE.CONTENT, { id: id })}
        state={{ blogItem: blogItem }}
      >
        <ImageWrapper>
          <Image src={imageUrl} alt={title} />
        </ImageWrapper>
        <InfoWrapper>
          <PublishDate>{printDate}</PublishDate>
          <Title>{title.length > 70 ? title.slice(0, 70) + "..." : title}</Title>
        </InfoWrapper>
      </Link>
      <FavoritesBtn onClick={handleChangeFavorites}>{isInFavorites ? "❤️" : "🤍"}</FavoritesBtn>
    </StyledArticleListItem>
  );
};

import { format } from "fecha";
import { memo } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getFavotites, getUserInfo, useAppSelector } from "store";
import { IBlogItem } from "types";
import { setNotFoundImg } from "utils";
import {
  StyledArticleListItem,
  Image,
  Title,
  PublishDate,
  FavoritesBtn,
  ImageWrapper,
  InfoWrapper,
  CardWrapper,
} from "./styles";

interface IProps {
  blogItem: IBlogItem;
  onClick: (blogItem: IBlogItem) => void;
  isFavorite?: boolean;
  list: IBlogItem[];
}

export const BlogListItem = memo(({ blogItem, onClick, isFavorite, list }: IProps) => {
  const { imageUrl, publishedAt, title, id } = blogItem;
  const { results } = useAppSelector(getFavotites);
  const { isAuth } = useAppSelector(getUserInfo);
  const navigate = useNavigate();

  const isInFavorites = results.map((favorite) => favorite.id).some((favorite) => favorite === id);

  const handleChangeFavorites = () => {
    onClick(blogItem);
  };

  const handlePassProps = () => {
    navigate(generatePath(ROUTE.HOME + ROUTE.CONTENT, { id: id }), {
      state: {
        item: blogItem,
        items: list,
      },
    });
  };

  const printDate = format(new Date(publishedAt), "MMMM D, YYYY");

  return (
    <StyledArticleListItem
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.07 }}
    >
      <CardWrapper onClick={handlePassProps}>
        <ImageWrapper>
          <Image src={imageUrl} alt={title} onError={setNotFoundImg} />
        </ImageWrapper>
        <InfoWrapper>
          <PublishDate>{printDate}</PublishDate>
          <Title>{title.length > 70 ? title.slice(0, 70) + "..." : title}</Title>
        </InfoWrapper>
      </CardWrapper>
      {isAuth ? (
        <FavoritesBtn onClick={handleChangeFavorites}>
          {isAuth && isInFavorites ? "❤️" : "🤍"}
        </FavoritesBtn>
      ) : (
        <FavoritesBtn>🤍</FavoritesBtn>
      )}
    </StyledArticleListItem>
  );
});

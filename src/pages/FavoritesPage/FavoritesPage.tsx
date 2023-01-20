import { BlogListItem } from "components";
import { getFavotites, removeFromFavorites, useAppDispatch, useAppSelector } from "store";
import { IBlogItem } from "types";
import { FavoritesWrapper, Heading, FavoritesList } from "./styles";

export const FavoritesPage = () => {
  const { results } = useAppSelector(getFavotites);
  const dispatch = useAppDispatch();

  const handleRemoveFromFavorites = (article: IBlogItem) => {
    dispatch(removeFromFavorites(article));
  };

  return (
    <FavoritesWrapper>
      {" "}
      <Heading>Favorites</Heading>
      <FavoritesList>
        {results !== null &&
          results &&
          results.map((result: IBlogItem) => {
            return (
              <BlogListItem
                key={result.id}
                blog={result}
                onClick={handleRemoveFromFavorites}
                isFavorite
              />
            );
          })}
      </FavoritesList>
    </FavoritesWrapper>
  );
};

import { ArticleListItem } from "components";
import { removeFromFavorites, useAppDispatch, useAppSelector } from "store";
import { IArticle } from "types";
import { FavoritesWrapper, Heading, FavoritesList } from "./styles";

export const FavoritesPage = () => {
  const { results } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const handleRemoveFromFavorites = (article: IArticle) => {
    dispatch(removeFromFavorites(article));
  };

  return (
    <FavoritesWrapper>
      {" "}
      <Heading>Favorites</Heading>
      <FavoritesList>
        {results !== null &&
          results &&
          results.map((result: IArticle) => {
            return (
              <ArticleListItem
                key={result.id}
                article={result}
                onClick={handleRemoveFromFavorites}
                isFavorite
              />
            );
          })}
      </FavoritesList>
    </FavoritesWrapper>
  );
};

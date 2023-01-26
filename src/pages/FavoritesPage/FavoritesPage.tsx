import { BlogListItem } from "components";
import { ROUTE } from "router";
import { getFavotites, removeFromFavorites, useAppDispatch, useAppSelector } from "store";
import { IBlogItem } from "types";
import { FavoritesWrapper, Heading, FavoritesList, NoFavoritesText, StyledLink } from "./styles";

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
      {results.length === 0 && (
        <>
          <NoFavoritesText>
            Add your favorite articles or news items here to get quick access to them at any time.
          </NoFavoritesText>
          <StyledLink to={ROUTE.HOME}>Check!</StyledLink>
        </>
      )}
      <FavoritesList>
        {results !== null &&
          results &&
          results.map((result: IBlogItem) => {
            return (
              <BlogListItem
                key={result.id}
                blogItem={result}
                onClick={handleRemoveFromFavorites}
                isFavorite
                list={results}
              />
            );
          })}
      </FavoritesList>
    </FavoritesWrapper>
  );
};

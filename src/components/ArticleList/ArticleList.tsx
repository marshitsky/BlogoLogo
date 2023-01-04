import { ArticleListItem, Spinner } from "components";
import { useEffect } from "react";
import { fetchArticles, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { ErrorMessage, StyledArticlesList, ListWrapper } from "./styles";

export const ArticleList = () => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);

  useEffect(() => {
    dispatch(fetchArticles(12));
  }, [dispatch]);

  return (
    <ListWrapper>
      {isLoading && <Spinner />}
      {error && <ErrorMessage />}
      <StyledArticlesList>
        {Array.isArray(articles) &&
          articles.map((article) => <ArticleListItem article={article} key={article.id} />)}
      </StyledArticlesList>
    </ListWrapper>
  );
};

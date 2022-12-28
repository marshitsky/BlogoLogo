import { ArticleListItem } from "components";
import { useEffect } from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { fetchArticles, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { ErrorMessage, Spinner, StyledArticlesList } from "./styles";

export const ArticleList = () => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);

  useEffect(() => {
    dispatch(fetchArticles(12));
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner>Loading...</Spinner>}
      {error && <ErrorMessage />}
      <StyledArticlesList>
        {Array.isArray(articles) &&
          articles.map((article) => (
            <Link to={generatePath(ROUTE.CONTENT, { id: `${article.id}` })}>
              <ArticleListItem article={article} key={article.id} />
            </Link>
          ))}
      </StyledArticlesList>
    </>
  );
};

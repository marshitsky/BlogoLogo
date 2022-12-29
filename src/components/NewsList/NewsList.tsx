import { NewsListItem, Spinner } from "components";
import { ErrorMessage, ListWrapper, StyledArticlesList } from "components/ArticleList/styles";
import { useEffect } from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { fetchNews, getAllNews, useAppDispatch, useAppSelector } from "store";

export const NewsList = () => {
  const dispatch = useAppDispatch();
  const { news, isLoading, error } = useAppSelector(getAllNews);

  useEffect(() => {
    dispatch(fetchNews(12));
  }, [dispatch]);

  return (
    <ListWrapper>
      {isLoading && <Spinner />}
      {error && <ErrorMessage />}
      <StyledArticlesList>
        {Array.isArray(news) &&
          news.map((singleNews) => (
            <Link
              to={generatePath(ROUTE.NEWS_CONTENT, { id: `${singleNews.id}` })}
              key={singleNews.id}
            >
              <NewsListItem news={singleNews} />
            </Link>
          ))}
      </StyledArticlesList>
    </ListWrapper>
  );
};

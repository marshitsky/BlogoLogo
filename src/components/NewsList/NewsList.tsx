import { NewsListItem, Spinner } from "components";
import { ErrorMessage, ListWrapper, StyledArticlesList } from "components/ArticleList/styles";
import { useEffect } from "react";
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
        {Array.isArray(news) && news.map((news) => <NewsListItem news={news} key={news.id} />)}
      </StyledArticlesList>
    </ListWrapper>
  );
};

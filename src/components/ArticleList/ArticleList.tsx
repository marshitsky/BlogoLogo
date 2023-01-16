import { ArticleListItem, NewsListItem, Spinner } from "components";
import { useEffect } from "react";
import {
  fetchArticles,
  fetchNews,
  getAllArticles,
  getAllNews,
  useAppDispatch,
  useAppSelector,
} from "store";
import { ErrorMessage, StyledArticlesList, ListWrapper } from "./styles";

interface IProps {
  tab: string;
}

export const ArticleList = ({ tab }: IProps) => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);
  const { news } = useAppSelector(getAllNews);

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  return (
    <ListWrapper>
      {isLoading && <Spinner />}
      {error && <ErrorMessage />}
      <StyledArticlesList>
        {tab === "articles"
          ? Array.isArray(articles) &&
            articles.map((article) => <ArticleListItem article={article} key={article.id} />)
          : Array.isArray(news) && news.map((news) => <NewsListItem news={news} key={news.id} />)}
      </StyledArticlesList>
    </ListWrapper>
  );
};

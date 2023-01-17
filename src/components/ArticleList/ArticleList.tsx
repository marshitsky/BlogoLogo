import { ArticleListItem, NewsListItem, Spinner } from "components";
import { useEffect } from "react";
import {
  addToFavorite,
  fetchArticles,
  fetchNews,
  getAllArticles,
  getAllNews,
  useAppDispatch,
  useAppSelector,
} from "store";
import { IArticle } from "types";
import { ErrorMessage, StyledArticlesList, ListWrapper } from "./styles";

interface IProps {
  tab: string;
}

export const ArticleList = ({ tab }: IProps) => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);
  const { news } = useAppSelector(getAllNews);

  const handleAddToFavorites = (article: IArticle) => {
    dispatch(addToFavorite(article));
  };

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
            articles.map((article) => (
              <ArticleListItem article={article} key={article.id} onClick={handleAddToFavorites} />
            ))
          : Array.isArray(news) &&
            news.map((news) => (
              <NewsListItem news={news} key={news.id} onClick={handleAddToFavorites} />
            ))}
      </StyledArticlesList>
    </ListWrapper>
  );
};

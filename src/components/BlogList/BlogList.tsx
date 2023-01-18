import { ArticleListItem, NewsListItem, Spinner } from "components";
import { addToFavorite, getAllArticles, getAllNews, useAppDispatch, useAppSelector } from "store";
import { IArticle } from "types";
import { ErrorMessage, StyledBlogList, ListWrapper } from "./styles";

interface IProps {
  tab: string;
}

export const BlogList = ({ tab }: IProps) => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);
  const { news } = useAppSelector(getAllNews);

  const handleAddToFavorites = (article: IArticle) => {
    dispatch(addToFavorite(article));
  };

  return (
    <ListWrapper>
      {isLoading && <Spinner />}
      {error && <ErrorMessage />}
      <StyledBlogList>
        {tab === "articles"
          ? Array.isArray(articles) &&
            articles.map((article) => (
              <ArticleListItem article={article} key={article.id} onClick={handleAddToFavorites} />
            ))
          : Array.isArray(news) &&
            news.map((news) => (
              <NewsListItem news={news} key={news.id} onClick={handleAddToFavorites} />
            ))}
      </StyledBlogList>
    </ListWrapper>
  );
};

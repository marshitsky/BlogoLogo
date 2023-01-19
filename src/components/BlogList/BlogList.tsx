import { ArticleListItem, NewsListItem, Spinner } from "components";
import { TabsNames } from "config";
import { addToFavorite, getAllArticles, getAllNews, useAppDispatch, useAppSelector } from "store";
import { IBlogItem } from "types";
import { ErrorMessage, StyledBlogList } from "./styles";

interface IProps {
  tab: string;
}

export const BlogList = ({ tab }: IProps) => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);
  const { news } = useAppSelector(getAllNews);

  const handleAddToFavorites = (article: IBlogItem) => {
    dispatch(addToFavorite(article));
  };

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage />;

  return (
    <StyledBlogList>
      {tab === TabsNames.ARTICLE_VALUE &&
        Array.isArray(articles) &&
        articles.map((article) => (
          <ArticleListItem article={article} key={article.id} onClick={handleAddToFavorites} />
        ))}
      {tab === TabsNames.NEWS_VALUE &&
        Array.isArray(news) &&
        news.map((news) => (
          <NewsListItem news={news} key={news.id} onClick={handleAddToFavorites} />
        ))}
    </StyledBlogList>
  );
};

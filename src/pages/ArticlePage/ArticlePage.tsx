import { ArticleContent } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, getArticleById, useAppDispatch, useAppSelector } from "store";

export const ArticlePage = () => {
  const params = useParams();
  const [details] = useState(`${params.id}`);
  const { results, isLoading } = useAppSelector(getArticleById);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticleById(details));
  }, [dispatch, details]);
  return (
    <div>
      {isLoading && <span>LOADING</span>}
      <ArticleContent article={results} />
    </div>
  );
};

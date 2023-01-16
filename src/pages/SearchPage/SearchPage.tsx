import { ArticleList } from "components";
import { useEffect } from "react";
import { fetchArticles, fetchNews, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { SearchResultsInfo } from "./styles";

export const SearchPage = () => {
  const {
    searchParams: { searchValue },
  } = useAppSelector(getAllArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    searchValue &&
      dispatch(
        fetchArticles({
          page: 0,
          word: searchValue,
          value: "",
        }),
      );
  }, [dispatch, searchValue]);

  useEffect(() => {
    searchValue &&
      dispatch(
        fetchNews({
          page: 0,
          word: searchValue,
          value: "",
        }),
      );
  }, [dispatch, searchValue]);

  return (
    <>
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for Articles
      </SearchResultsInfo>
      <ArticleList tab={"articles"} />
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for News
      </SearchResultsInfo>
      <ArticleList tab={"blogs"} />
    </>
  );
};

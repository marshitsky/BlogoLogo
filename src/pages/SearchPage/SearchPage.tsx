import { BlogList, Modal, Spinner } from "components";
import { useEffect, useState } from "react";
import { fetchArticles, fetchNews, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { SearchResultsInfo } from "./styles";

export const SearchPage = () => {
  const [, setIsActive] = useState(false);
  const {
    searchParams: { searchValue },
  } = useAppSelector(getAllArticles);
  const dispatch = useAppDispatch();
  const { articles, news, error, isLoading } = useAppSelector(getAllArticles);

  const handleCloseModal = () => {
    setIsActive(false);
  };

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
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Modal message={error} handleClick={handleCloseModal} />
      ) : (
        <BlogList list={articles} />
      )}
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for News
      </SearchResultsInfo>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Modal message={error} handleClick={handleCloseModal} />
      ) : (
        <BlogList list={news} />
      )}
    </>
  );
};

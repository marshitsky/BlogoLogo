import { BlogList, Modal, Spinner } from "components";
import { useEffect, useState } from "react";
import { fetchArticles, fetchNews, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { SearchPageWrapper, SearchResultsInfo } from "./styles";

export const SearchPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const {
    searchParams: { searchValue },
  } = useAppSelector(getAllArticles);
  const dispatch = useAppDispatch();
  const { articles, news, error, isLoading } = useAppSelector(getAllArticles);

  const handleCloseModal = () => {
    setIsActiveModal(true);
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
    <SearchPageWrapper>
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for Articles
      </SearchResultsInfo>
      {isLoading ? (
        <Spinner />
      ) : error && !isActiveModal ? (
        <Modal message={error} handleClick={handleCloseModal} />
      ) : (
        <BlogList list={articles} />
      )}
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for News
      </SearchResultsInfo>
      {isLoading ? (
        <Spinner />
      ) : error && !isActiveModal ? (
        <Modal message={error} handleClick={handleCloseModal} />
      ) : (
        <BlogList list={news} />
      )}
    </SearchPageWrapper>
  );
};

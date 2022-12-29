import React, { useEffect, useState } from "react";
import { fetchArticles, fetchNews, useAppDispatch } from "store";
import { PaginationButton, PaginationList } from "./styles";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({ page: 12 });

  const handleNext = () => {
    setRequestParams({
      page: requestParams.page + 12,
    });
  };

  useEffect(() => {
    dispatch(fetchArticles(requestParams.page));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchNews(requestParams.page));
  }, [dispatch, requestParams]);

  return (
    <PaginationList>
      <PaginationButton onClick={handleNext}>Show more</PaginationButton>
    </PaginationList>
  );
};

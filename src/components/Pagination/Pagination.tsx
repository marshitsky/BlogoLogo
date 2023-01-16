import React, { useEffect, useState } from "react";
import { fetchArticles, fetchNews, useAppDispatch } from "store";
import {
  CurrentButton,
  CurrentPageItem,
  FirstPageItem,
  NextButton,
  PageList,
  PrevButton,
  SecondPageItem,
  StyledPagination,
} from "./styles";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const [requestParams, setRequestParams] = useState({ page: 0, current: 1 });

  const handleCurrentPage = () => {
    setRequestParams({
      page: requestParams.page,
      current: requestParams.current,
    });
  };

  const handlePrev = () => {
    setRequestParams({
      page: requestParams.page - 12,
      current: requestParams.current - 1,
    });
  };

  const handleNext = () => {
    setRequestParams({
      page: requestParams.page + 12,
      current: requestParams.current + 1,
    });
  };

  useEffect(() => {
    dispatch(fetchArticles({ page: requestParams.page, value: "", word: "" }));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchNews({ page: requestParams.page, value: "", word: "" }));
  }, [dispatch, requestParams]);

  return (
    <StyledPagination>
      <PrevButton onClick={handlePrev}>{"⬅"} Prev</PrevButton>
      <PageList>
        <FirstPageItem current={requestParams.current}>
          <PrevButton onClick={handlePrev}>{requestParams.current - 1}</PrevButton>
        </FirstPageItem>
        <CurrentPageItem>
          <CurrentButton onClick={handleCurrentPage}>{requestParams.current}</CurrentButton>
        </CurrentPageItem>
        <SecondPageItem current={requestParams.current}>
          <NextButton onClick={handleNext}>{requestParams.current + 1}</NextButton>
        </SecondPageItem>
      </PageList>
      <NextButton onClick={handleNext}>Next {"➡"}</NextButton>
    </StyledPagination>
  );
};

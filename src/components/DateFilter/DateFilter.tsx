import React from "react";
import { fetchArticles, useAppDispatch } from "store";
import { FilterButton, StyledDateFilter } from "./styles";

export const DateFilter = () => {
  const dispatch = useAppDispatch();
  const handleFilterDay = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt" }));
  };
  const handleFilterWeek = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt:DESC" }));
  };
  const handleFilterMonth = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt:ASC" }));
  };
  const handleFilterYear = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt:DESC" }));
  };

  return (
    <StyledDateFilter>
      <FilterButton to={""} onClick={handleFilterDay}>
        Day
      </FilterButton>
      <FilterButton to={""} onClick={handleFilterWeek}>
        Week
      </FilterButton>
      <FilterButton to={""} onClick={handleFilterMonth}>
        Month
      </FilterButton>
      <FilterButton to={""} onClick={handleFilterYear}>
        Year
      </FilterButton>
    </StyledDateFilter>
  );
};

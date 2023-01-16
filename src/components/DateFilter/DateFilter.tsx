import { fetchArticles, useAppDispatch } from "store";
import { FilterButton, StyledDateFilter } from "./styles";

export const DateFilter = () => {
  const dispatch = useAppDispatch();
  // const { articles } = useAppSelector(getAllArticles);

  // const dates = articles.map((el) => Date.parse(el.publishedAt));
  // const today = Date.now();

  const handleFilterDay = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt", word: "" }));
  };
  const handleFilterWeek = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt", word: "" }));
  };
  const handleFilterMonth = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt", word: "" }));
  };
  const handleFilterYear = () => {
    dispatch(fetchArticles({ page: 0, value: "publishedAt", word: "" }));
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

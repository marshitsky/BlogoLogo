import { ArticleList } from "components";
import { useEffect } from "react";
import { fetchSearch, getSearch, useAppDispatch, useAppSelector } from "store";

export const SearchPage = () => {
  const { searchParams } = useAppSelector(getSearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    searchParams.searchValue && dispatch(fetchSearch(searchParams.searchValue));
  }, [dispatch, searchParams]);

  return (
    <div>
      <h1>"{searchParams.searchValue ? searchParams.searchValue : " "}" search results</h1>
      <ArticleList />
    </div>
  );
};

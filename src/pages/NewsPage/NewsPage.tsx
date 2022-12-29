import { NewsContent } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleNews, getNewsById, useAppDispatch, useAppSelector } from "store";

export const NewsPage = () => {
  const params = useParams();
  const [details] = useState(`${params.id}`);
  const { news, isLoading } = useAppSelector(getNewsById);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSingleNews(details));
  }, [dispatch, details]);

  return (
    <div>
      {isLoading && <span>LOADING</span>}
      <NewsContent news={news} />
    </div>
  );
};

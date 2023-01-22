import { BlogContent, Modal, Spinner } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsById, getArticleById, useAppDispatch, useAppSelector } from "store";

export const NewsPage = () => {
  const [, setIsActive] = useState(false);
  const { id = "" } = useParams();
  const { news, isLoading, error } = useAppSelector(getArticleById);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Modal message={error} handleClick={handleCloseModal} />;
  }

  return <BlogContent blogItem={news} />;
};

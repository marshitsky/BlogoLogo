import { BlogContent, Modal, Spinner } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, getArticleById, useAppDispatch, useAppSelector } from "store";

export const ArticlePage = () => {
  const [, setIsActive] = useState(false);
  const { id = "" } = useParams();
  const { article, isLoading, error } = useAppSelector(getArticleById);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Modal message={error} handleClick={handleCloseModal} />;
  }

  return <BlogContent blogItem={article} />;
};

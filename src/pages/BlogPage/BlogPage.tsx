import { BlogContent, Modal, Spinner } from "components";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchArticleById, getArticleById, useAppDispatch, useAppSelector } from "store";

export const BlogPage = () => {
  const [, setIsActive] = useState(false);
  const { id = "" } = useParams();
  const { isLoading, error } = useAppSelector(getArticleById);
  const dispatch = useAppDispatch();
  const location = useLocation();

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

  return <BlogContent blogItem={location.state.item} />;
};

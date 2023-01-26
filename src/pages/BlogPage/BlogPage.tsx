import { BlogContent, Modal, Slider, Spinner } from "components";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  addToFavorite,
  fetchArticleById,
  fetchArticles,
  getArticleById,
  useAppDispatch,
  useAppSelector,
} from "store";
import { IBlogItem } from "types";
import { RecommendationsTitle, SliderWrapper } from "./styles";

export const BlogPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { id = "" } = useParams();
  const { isLoading, error } = useAppSelector(getArticleById);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleCloseModal = () => {
    setIsActiveModal(true);
  };
  const handleAddToFavorites = (article: IBlogItem) => {
    dispatch(addToFavorite(article));
  };

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error && !isActiveModal) {
    return <Modal message={error} handleClick={handleCloseModal} />;
  }

  return (
    <>
      <BlogContent blogItem={location.state.item} onClick={handleAddToFavorites} />
      <SliderWrapper>
        <RecommendationsTitle>Recommendations</RecommendationsTitle>
        <Slider blogItem={location.state.items} />
      </SliderWrapper>
    </>
  );
};

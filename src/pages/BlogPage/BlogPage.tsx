import { BlogContent, Modal, Slider, Spinner } from "components";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchArticleById, getArticleById, useAppDispatch, useAppSelector } from "store";
import { RecommendationsTitle, SliderWrapper } from "./styles";

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

  return (
    <>
      <BlogContent blogItem={location.state.item} />
      <SliderWrapper>
        <RecommendationsTitle>Recommendations</RecommendationsTitle>
        <Slider />
      </SliderWrapper>
    </>
  );
};

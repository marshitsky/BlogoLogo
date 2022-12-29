import { NavigationLink, Title, Image, Text } from "components/ArticleContent/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { INews } from "types";

interface IProps {
  news: INews;
}

export const NewsContent = ({ news }: IProps) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  const { id, imageUrl, title, summary } = news;

  return (
    <>
      <NavigationLink onClick={handleBackHome}>Home </NavigationLink>
      <span> / Post {id}</span>
      <Title>{title}</Title>
      <Image src={imageUrl} alt="article-img" />
      <Text>{summary}</Text>
    </>
  );
};

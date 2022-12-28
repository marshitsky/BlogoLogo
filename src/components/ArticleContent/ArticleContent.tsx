import { useNavigate } from "react-router-dom";
import { IArticle } from "types";
import { NavigationLink, Title, Image, Text } from "./styles";

interface IProps {
  article: IArticle;
}

export const ArticleContent = ({ article }: IProps) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  const { id, imageUrl, title, summary } = article;
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

import { useNavigate } from "react-router-dom";
import { IBlogItem } from "types";
import { NavigationLink, Title, Image, Text, OuterLink, OuterLinkWrapper } from "./styles";

interface IProps {
  article: IBlogItem;
}

export const ArticleContent = ({ article }: IProps) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };
  const { id, imageUrl, title, summary, url } = article;
  return (
    <>
      <NavigationLink onClick={handleBackHome}>Home </NavigationLink>
      <span> / Post {id}</span>
      <Title>{title}</Title>
      <Image src={imageUrl} alt="article-img" />
      <Text>{summary}</Text>
      <OuterLinkWrapper>
        <OuterLink href={url} target="_blank">
          Original source
        </OuterLink>
      </OuterLinkWrapper>
    </>
  );
};

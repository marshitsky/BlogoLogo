import { useNavigate } from "react-router-dom";
import { IBlogItem } from "types";
import { NavigationLink, Title, Image, Text, OuterLink, OuterLinkWrapper, Wrapper } from "./styles";

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
    <Wrapper>
      <NavigationLink onClick={handleBackHome}>
        Home <span> / Post {id}</span>
      </NavigationLink>
      <Title>{title}</Title>
      <Image src={imageUrl} alt="article-img" />
      <Text>{summary}</Text>
      <OuterLinkWrapper>
        <OuterLink href={url} target="_blank">
          Original source
        </OuterLink>
      </OuterLinkWrapper>
    </Wrapper>
  );
};

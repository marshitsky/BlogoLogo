import { useNavigate } from "react-router-dom";
import { IBlogItem } from "types";
import { NavigationLink, Title, Image, Text, OuterLink, OuterLinkWrapper, Wrapper } from "./styles";

interface IProps {
  blogItem: IBlogItem;
}

export const BlogContent = ({ blogItem }: IProps) => {
  const { id, imageUrl, title, summary, url, publishedAt } = blogItem;
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <NavigationLink onClick={handleBackHome}>
        Home <span> / Post {id}</span>
      </NavigationLink>
      <Title>{title}</Title>
      <p>{publishedAt}</p>
      <Image src={imageUrl} alt={title} />
      <Text>{summary}</Text>
      <OuterLinkWrapper>
        <OuterLink href={url} target="_blank">
          Original source
        </OuterLink>
      </OuterLinkWrapper>
    </Wrapper>
  );
};

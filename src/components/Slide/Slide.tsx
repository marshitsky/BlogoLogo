import { ImageWrapper, InfoWrapper, PublishDate, Title } from "components/BlogListItem/styles";
import { format } from "fecha";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { IBlogItem } from "types";
import { setNotFoundImg } from "utils";
import { Image, StyledSlide } from "./styles";

interface IProps {
  blogItem: IBlogItem;
}

export const Slide = ({ blogItem }: IProps) => {
  const { id, title, imageUrl, publishedAt } = blogItem;
  const navigate = useNavigate();

  const handlePassProps = () => {
    navigate(generatePath(ROUTE.HOME + ROUTE.CONTENT, { id: id }), {
      state: {
        item: blogItem,
      },
    });
  };

  const printDate = format(new Date(publishedAt), "MMMM D, YYYY");

  return (
    <StyledSlide onClick={handlePassProps}>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} onError={setNotFoundImg} />
      </ImageWrapper>
      <InfoWrapper>
        <PublishDate>{printDate}</PublishDate>
        <Title>{title.length > 70 ? title.slice(0, 70) + "..." : title}</Title>
      </InfoWrapper>
    </StyledSlide>
  );
};

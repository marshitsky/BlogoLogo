import { BlogListItem } from "components";
import { addToFavorite, useAppDispatch } from "store";
import { IBlogItem } from "types";
import { StyledBlogList } from "./styles";

interface IProps {
  list: IBlogItem[];
}

export const BlogList = ({ list }: IProps) => {
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (article: IBlogItem) => {
    dispatch(addToFavorite(article));
  };

  return (
    <StyledBlogList>
      {Array.isArray(list) &&
        list.map((blogItem) => (
          <BlogListItem blogItem={blogItem} key={blogItem.id} onClick={handleAddToFavorites} />
        ))}
    </StyledBlogList>
  );
};

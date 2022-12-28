import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { IArticle } from "types";

interface IProps {
  article: IArticle;
}

export const ArticleContent = ({ article }: IProps) => {
  const { id, imageUrl, title, summary, publishedAt } = article;
  return (
    <div>
      <Link to={ROUTE.HOME}>Home</Link>
      <h3>Post / {id}</h3>
      <h4>{title}</h4>
      <img src={imageUrl} alt="" />
      <p>{publishedAt}</p>
      <p>{summary}</p>
    </div>
  );
};

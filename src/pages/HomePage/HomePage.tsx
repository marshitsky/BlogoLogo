import { ArticleList, CustomSelect } from "components";
import { Title, HomePageHeader, HomePageWrapper } from "./styles";

export const HomePage = () => {
  return (
    <HomePageWrapper>
      <Title>Blog</Title>
      <HomePageHeader>
        <p>day week month year</p>
        <CustomSelect />
      </HomePageHeader>
      <ArticleList />
    </HomePageWrapper>
  );
};

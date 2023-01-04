import { ArticleList, NewsList, Pagination, Tabs } from "components";
import { useState } from "react";
import { Title, HomePageWrapper } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState<string>("articles");

  return (
    <HomePageWrapper>
      <Title>Blog</Title>
      <Tabs tab={tab} setTab={setTab} />
      {tab === "articles" ? <ArticleList /> : <NewsList />}
      <Pagination />
    </HomePageWrapper>
  );
};

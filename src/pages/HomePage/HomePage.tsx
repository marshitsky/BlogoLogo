import { ArticleList, CustomSelect, DateFilter, Pagination, Tabs } from "components";
import { useState } from "react";
import { Title, HomePageWrapper, SortPanelWrapper } from "./styles";

export const HomePage = () => {
  const [tab, setTab] = useState<string>("articles");

  return (
    <HomePageWrapper>
      <Title>Blog</Title>
      <Tabs tab={tab} setTab={setTab} />
      <SortPanelWrapper>
        <DateFilter />
        {tab === "articles" ? <CustomSelect tab="articles" /> : <CustomSelect tab="blogs" />}{" "}
      </SortPanelWrapper>
      {tab === "articles" ? <ArticleList tab="articles" /> : <ArticleList tab="blogs" />}
      <Pagination />
    </HomePageWrapper>
  );
};

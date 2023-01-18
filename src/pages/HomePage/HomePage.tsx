import { BlogList, CustomSelect, DateFilter, Pagination, Tabs } from "components";
import { TabsBlock } from "components/Tabs/styles";
import { TabsNames } from "config";
import { useToggle } from "hooks";
import { useEffect, useState } from "react";
import { fetchArticles, fetchNews, useAppDispatch } from "store";
import { Title, HomePageWrapper, SortPanelWrapper } from "./styles";

export const HomePage = () => {
  const [isActiveTab, setIsActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabsNames.ARTICLE_VALUE);

  const dispatch = useAppDispatch();

  const handleActiveTab = (value: string) => {
    setTabValue(value);
    setIsActiveTab();
  };

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  return (
    <HomePageWrapper>
      <Title>Blog</Title>

      <TabsBlock>
        <Tabs
          tabName={TabsNames.ARTICLE_LABEL}
          setTab={() => handleActiveTab(TabsNames.ARTICLE_VALUE)}
          isActive={!isActiveTab}
        />
        <Tabs
          tabName={TabsNames.NEWS_LABEL}
          setTab={() => handleActiveTab(TabsNames.NEWS_VALUE)}
          isActive={isActiveTab}
        />
      </TabsBlock>

      <SortPanelWrapper>
        <DateFilter />
        {tabValue === TabsNames.ARTICLE_VALUE && <CustomSelect tab="articles" />}
        {tabValue === TabsNames.NEWS_VALUE && <CustomSelect tab="blogs" />}
      </SortPanelWrapper>
      {tabValue === TabsNames.ARTICLE_VALUE && <BlogList tab="articles" />}
      {tabValue === TabsNames.NEWS_VALUE && <BlogList tab="blogs" />}
      <Pagination />
    </HomePageWrapper>
  );
};

import { BlogList, CustomSelect, DateFilter, Pagination, Tabs } from "components";
import { TabsBlock } from "components/Tabs/styles";
import { TabsNames } from "config";
import { useToggle } from "hooks";
import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { fetchArticles, fetchNews, useAppDispatch } from "store";
import { IOption } from "types";
import { Title, HomePageWrapper, SortPanelWrapper } from "./styles";

export const HomePage = () => {
  const [isActiveTab, setIsActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabsNames.ARTICLE_VALUE);

  const dispatch = useAppDispatch();

  const handleActiveTab = (value: string) => {
    setTabValue(value);
    setIsActiveTab();
  };

  const handleSelect = (option: SingleValue<IOption | null | any>): void => {
    tabValue === TabsNames.ARTICLE_VALUE &&
      option &&
      dispatch(fetchArticles({ page: 0, value: option.value, word: "" }));
    tabValue === TabsNames.NEWS_VALUE &&
      option &&
      dispatch(fetchNews({ page: 0, value: option.value, word: "" }));
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
        {tabValue === TabsNames.ARTICLE_VALUE && <CustomSelect handleSelect={handleSelect} />}
        {tabValue === TabsNames.NEWS_VALUE && <CustomSelect handleSelect={handleSelect} />}
      </SortPanelWrapper>

      {tabValue === TabsNames.ARTICLE_VALUE && <BlogList tab="articles" />}
      {tabValue === TabsNames.NEWS_VALUE && <BlogList tab="blogs" />}
      <Pagination />
    </HomePageWrapper>
  );
};

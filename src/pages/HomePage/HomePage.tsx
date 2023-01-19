import { BlogList, CustomSelect, Pagination, Tabs } from "components";
import { StyledPagination } from "components/Pagination/styles";
import { TabsBlock } from "components/Tabs/styles";
import { options, TabsNames } from "config";
import { useToggle } from "hooks";
import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { fetchArticles, fetchNews, useAppDispatch } from "store";
import { IOption } from "types";
import { Title, HomePageWrapper, SortPanelWrapper, SortPanelBlock } from "./styles";

export const HomePage = () => {
  const [isActiveTab, setIsActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabsNames.ARTICLE_VALUE);
  const [option, setOption] = useState(options[0]);
  const [requestParams, setRequestParams] = useState({ page: 0, current: 1 });

  const dispatch = useAppDispatch();

  const handleActiveTab = (value: string) => {
    setTabValue(value);
    setIsActiveTab();
    setRequestParams({ page: 0, current: 1 });
  };

  const handleSelect = (option: SingleValue<IOption | null | any>): void => {
    setOption(option);
    setRequestParams({ page: 0, current: 1 });
  };

  const handlePage = (cardsQuanity: number, pageNumber: number) => {
    setRequestParams({
      page: requestParams.page + cardsQuanity,
      current: requestParams.current + pageNumber,
    });
  };

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, value: option.value, word: "" }));
  }, [dispatch, option.value]);

  useEffect(() => {
    dispatch(fetchNews({ page: 0, value: option.value, word: "" }));
  }, [dispatch, option.value]);

  useEffect(() => {
    dispatch(fetchArticles({ page: requestParams.page, value: "", word: "" }));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchNews({ page: requestParams.page, value: "", word: "" }));
  }, [dispatch, requestParams]);

  useEffect(() => {
    dispatch(fetchArticles({ page: requestParams.page, value: option.value, word: "" }));
  }, [dispatch, option.value, requestParams.page]);

  useEffect(() => {
    dispatch(fetchNews({ page: requestParams.page, value: option.value, word: "" }));
  }, [dispatch, option.value, requestParams.page]);

  return (
    <HomePageWrapper>
      <Title>Blog</Title>

      <SortPanelBlock>
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
          {/* <DateFilter /> */}
          {tabValue === TabsNames.ARTICLE_VALUE && <CustomSelect handleSelect={handleSelect} />}
          {tabValue === TabsNames.NEWS_VALUE && <CustomSelect handleSelect={handleSelect} />}
        </SortPanelWrapper>
      </SortPanelBlock>

      {tabValue === TabsNames.ARTICLE_VALUE && <BlogList tab="articles" />}
      {tabValue === TabsNames.NEWS_VALUE && <BlogList tab="blogs" />}

      <StyledPagination>
        <Pagination
          handlePage={() => handlePage(-12, -1)}
          requestParams={requestParams.current - 1}
        />
        <Pagination handlePage={() => handlePage(0, 0)} requestParams={requestParams.current} />
        <Pagination
          handlePage={() => handlePage(12, 1)}
          requestParams={requestParams.current + 1}
        />
        <Pagination
          handlePage={() => handlePage(12, 1)}
          requestParams={requestParams.current + 2}
        />
        {"···"}
        <Pagination
          handlePage={() => handlePage(12, 5)}
          requestParams={requestParams.current + 5}
        />
      </StyledPagination>
    </HomePageWrapper>
  );
};

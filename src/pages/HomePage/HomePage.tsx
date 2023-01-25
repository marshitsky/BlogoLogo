import { BlogList, CustomSelect, Modal, Pagination, Tabs } from "components";
import { StyledBlogList } from "components/BlogList/styles";
import { StyledPagination } from "components/Pagination/styles";
import { SkeletonLoader } from "components";
import { TabsBlock } from "components/Tabs/styles";
import { options, TabsNames } from "config";
import { useToggle } from "hooks";
import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { fetchArticles, fetchNews, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { IOption } from "types";
import { Title, HomePageWrapper, SortPanelWrapper, SortPanelBlock } from "./styles";

export const HomePage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isActiveTab, setIsActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabsNames.ARTICLE_VALUE);
  const [option, setOption] = useState(options[0]);
  const [requestParams, setRequestParams] = useState({ page: 0, current: 1 });
  const { articles, news, error, isLoading } = useAppSelector(getAllArticles);

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setIsActiveModal(true);
  };

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
    dispatch(fetchArticles({ page: requestParams.page, value: option.value, word: "" }));
  }, [dispatch, option.value, requestParams.page]);

  useEffect(() => {
    dispatch(fetchNews({ page: requestParams.page, value: option.value, word: "" }));
  }, [dispatch, option.value, requestParams.page]);

  return (
    <HomePageWrapper
      initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.6,
      }}
    >
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
          {tabValue === TabsNames.ARTICLE_VALUE && <CustomSelect handleSelect={handleSelect} />}
          {tabValue === TabsNames.NEWS_VALUE && <CustomSelect handleSelect={handleSelect} />}
        </SortPanelWrapper>
      </SortPanelBlock>

      {isLoading ? (
        <StyledBlogList>
          {[...new Array(12)].map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </StyledBlogList>
      ) : error && !isActiveModal ? (
        <Modal message={error} handleClick={handleCloseModal} />
      ) : tabValue === TabsNames.ARTICLE_VALUE ? (
        <BlogList list={articles} />
      ) : (
        <BlogList list={news} />
      )}

      <StyledPagination>
        <Pagination
          handlePage={() => handlePage(-18, -1)}
          requestParams={requestParams.current - 1}
        />
        <Pagination handlePage={() => handlePage(0, 0)} requestParams={requestParams.current} />
        <Pagination
          handlePage={() => handlePage(18, 1)}
          requestParams={requestParams.current + 1}
        />
        <Pagination
          handlePage={() => handlePage(18, 1)}
          requestParams={requestParams.current + 2}
        />
        {"···"}
        <Pagination
          handlePage={() => handlePage(18, 5)}
          requestParams={requestParams.current + 5}
        />
      </StyledPagination>
    </HomePageWrapper>
  );
};

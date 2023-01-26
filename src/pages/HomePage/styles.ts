import styled from "styled-components";
import { motion } from "framer-motion";
import { H1, Media } from "ui";
import { StyledBlogList } from "components/BlogList/styles";
import { StyledPagination } from "components/Pagination/styles";
import { TabsBlock } from "components/Tabs/styles";

const HomePageWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${H1};
  text-align: start;
  ${Media.MD} {
    font-size: 42px;
  }
`;

const SortPanelBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  row-gap: 20px;
  padding-top: 50px;
  ${Media.LG} {
    padding-top: 25px;
  }
  ${Media.MD} {
    flex-direction: column;
    align-items: center;
  }
`;

const SortPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  ${Media.LG} {
    flex-direction: column;
    align-items: start;
    gap: 15px;
  }
`;

const TabsWrapper = styled(TabsBlock)``;
const StyledItemsList = styled(StyledBlogList)``;
const PaginationWrapper = styled(StyledPagination)``;

export {
  Title,
  HomePageWrapper,
  SortPanelBlock,
  SortPanelWrapper,
  TabsWrapper,
  StyledItemsList,
  PaginationWrapper,
};

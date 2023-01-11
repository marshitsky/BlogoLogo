import { CustomArticleSelect, CustomNewsSelect } from "components";
import { DateFilter } from "components/DateFilter/DateFilter";
import { useToggle } from "hooks";
import { TabButton, TabsBlock, TabsControlWrapper, SortPanelWrapper } from "./styles";

interface ITabs {
  tab: string;
  setTab: (tab: string) => void;
}

export const Tabs = ({ setTab, tab }: ITabs) => {
  const [isActive, setIsActive] = useToggle();

  const handleArticle = () => {
    setTab("articles");
    setIsActive();
  };

  const handleNews = () => {
    setTab("blogs");
    setIsActive();
  };

  return (
    <TabsControlWrapper>
      <TabsBlock>
        <TabButton to={""} onClick={handleArticle}>
          Articles
        </TabButton>
        <TabButton to={""} onClick={handleNews}>
          Blogs
        </TabButton>
      </TabsBlock>
      <SortPanelWrapper>
        <DateFilter />
        {isActive ? <CustomNewsSelect /> : <CustomArticleSelect />}
      </SortPanelWrapper>
    </TabsControlWrapper>
  );
};

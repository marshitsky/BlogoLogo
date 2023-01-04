import { CustomSelect } from "components";
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
        <TabButton onClick={handleArticle}>Articles</TabButton>
        <TabButton onClick={handleNews}>Blogs</TabButton>
      </TabsBlock>
      <SortPanelWrapper>
        <p>Day Week Month Year</p>
        <CustomSelect />
      </SortPanelWrapper>
    </TabsControlWrapper>
  );
};

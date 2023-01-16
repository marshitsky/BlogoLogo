import { useToggle } from "hooks";
import { TabButton, TabsBlock } from "./styles";

interface ITabs {
  tab: string;
  setTab: (tab: string) => void;
}

export const Tabs = ({ setTab, tab }: ITabs) => {
  const [_, setIsActive] = useToggle();

  const handleArticle = () => {
    setTab("articles");
    setIsActive();
  };

  const handleNews = () => {
    setTab("blogs");
    setIsActive();
  };

  return (
    <TabsBlock>
      <TabButton to={""} onClick={handleArticle}>
        Articles
      </TabButton>
      <TabButton to={""} onClick={handleNews}>
        Blogs
      </TabButton>
    </TabsBlock>
  );
};

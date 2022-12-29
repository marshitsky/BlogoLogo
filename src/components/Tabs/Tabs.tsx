import { ArticleList, NewsList } from "components";
import { TabsItem } from "components/TabsItem/TabsItem";
import React, { useState } from "react";
import { ITab } from "types";
import { TabsBlock } from "./styles";

const tabs: ITab[] = [
  { id: "1", label: "Articles" },
  { id: "2", label: "News" },
];

export const Tabs = () => {
  const [chosenTab, setChosenTab] = useState(tabs[0].id);
  const handleSelectTab = (id: string) => {
    setChosenTab(id);
  };
  return (
    <>
      <TabsBlock>
        {tabs.map((item) => (
          <TabsItem key={item.id} onClick={handleSelectTab} isChosen={chosenTab} tab={item}>
            {item.label}
          </TabsItem>
        ))}
      </TabsBlock>
      {chosenTab === tabs[0].id ? <ArticleList /> : <NewsList />}
    </>
  );
};

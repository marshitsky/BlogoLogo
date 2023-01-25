import { memo } from "react";
import { TabButton } from "./styles";

interface ITabs {
  tabName: string;
  setTab: () => void;
  isActive: boolean;
}

export const Tabs = memo(({ setTab, tabName, isActive }: ITabs) => {
  return (
    <TabButton to={""} onClick={setTab} $isActive={isActive}>
      {tabName}
    </TabButton>
  );
});

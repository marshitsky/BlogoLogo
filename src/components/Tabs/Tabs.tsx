import { TabButton } from "./styles";

interface ITabs {
  tabName: string;
  setTab: () => void;
  isActive: boolean;
}

export const Tabs = ({ setTab, tabName, isActive }: ITabs) => {
  return (
    <TabButton to={""} onClick={setTab} $isActive={isActive}>
      {tabName}
    </TabButton>
  );
};

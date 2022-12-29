import { ITab } from "types";
import { Tab } from "./styles";

interface IProps {
  tab: ITab;
  onClick: (id: string) => void;
  isChosen: string;
  children: string;
}

export const TabsItem = ({ onClick, children, tab }: IProps) => {
  return <Tab onClick={() => onClick(tab.id)}>{children}</Tab>;
};

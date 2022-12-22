import React, { ChangeEvent, HTMLInputTypeAttribute, useEffect } from "react";
import { useToggle } from "../../hooks";
import { ReactComponent as SerchIcon } from "../../assets/icons/search.svg";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: IProps) => {
  const [isSearchActive, toogleIsSearchActive] = useToggle(false);

  const handleSearch = () => toogleIsSearchActive();

  useEffect(() => {}, []);

  return <>{isSearchActive ? <StyledInput {...props} /> : <SerchIcon onClick={handleSearch} />}</>;
};

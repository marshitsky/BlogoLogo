import { SearchIcon } from "assets/icons";
import { useToggle } from "hooks";
import React, { ChangeEvent, HTMLInputTypeAttribute, useEffect } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: Pick<HTMLInputTypeAttribute, "search">;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: IProps) => {
  const [isSearchActive, toogleIsSearchActive] = useToggle(false);

  const handleSearch = () => toogleIsSearchActive();

  useEffect(() => {}, []);

  // eslint-disable-next-line max-len
  return (
    <>
      {isSearchActive ? (
        <StyledInput type="search" placeholder="Search ..." />
      ) : (
        <SearchIcon onClick={handleSearch} />
      )}
    </>
  );
};

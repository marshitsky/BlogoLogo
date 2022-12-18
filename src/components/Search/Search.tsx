import React, { useEffect } from "react";
import { useToggle } from "../../hooks";
import { ReactComponent as SerchIcon } from "../../assets/icons/search.svg";
import { StyledInput } from "./styles";

export const Search = () => {
  const [isSearchActive, toogleIsSearchActive] = useToggle(true);

  const handleSearch = () => toogleIsSearchActive();

  useEffect(() => {
    handleSearch();
  }, []);

  return <>{isSearchActive ? <StyledInput /> : <SerchIcon onClick={handleSearch} />}</>;
};

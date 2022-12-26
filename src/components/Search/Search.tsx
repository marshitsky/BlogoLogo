import { SearchIcon } from "assets/icons";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import React, { ChangeEvent, HTMLInputTypeAttribute, useRef, useState } from "react";
import { InputWrapper, StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <>
      {isModalOpen ? (
        <InputWrapper ref={ref}>
          <StyledInput type="search" placeholder="Search ..." />
        </InputWrapper>
      ) : (
        <SearchIcon onClick={() => setModalOpen(true)} />
      )}
    </>
  );
};

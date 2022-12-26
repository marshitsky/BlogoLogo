import { SearchIcon } from "assets/icons";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { ChangeEvent, HTMLInputTypeAttribute, useRef, useState } from "react";
import { InputWrapper, StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInputActive, setIsInputActive] = useState(false);
  useOnClickOutside(ref, () => setIsInputActive(false));

  return (
    <>
      {isInputActive ? (
        <InputWrapper ref={ref}>
          <StyledInput type="search" placeholder="Search ..." />
        </InputWrapper>
      ) : (
        <SearchIcon onClick={() => setIsInputActive(true)} />
      )}
    </>
  );
};

import styled from "styled-components";
import { Color, S1 } from "ui";

const PaginationList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 52px;
`;

const PaginationItem = styled.li`
  list-style: none;
`;

const PaginationButton = styled.button`
  padding: 10px 30px;
  ${S1}
  border: 1px solid ${Color.WHITE_HEADER};
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  transition: 1s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export { PaginationList, PaginationItem, PaginationButton };

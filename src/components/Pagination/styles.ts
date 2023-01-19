import styled from "styled-components";
import { Color, B1 } from "ui";

interface setCurrent {
  current: number;
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  column-gap: 30px;
  padding-top: 40px;
`;

const PaginationButton = styled.button<setCurrent>`
  ${B1};
  padding: 5px;
  font-size: 18px !important;
  color: ${Color.FONT_COLOR};
  background-color: transparent;
  visibility: ${({ current }) => (current < 1 ? "hidden" : "visible")};
  cursor: pointer;
  &:hover {
    color: ${Color.PRIMARY_LIGHT};
  }
`;

export { StyledPagination, PaginationButton };

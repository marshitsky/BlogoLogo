import styled from "styled-components";
import { Color } from "ui";

interface setCurrent {
  current: number;
  $isActive: boolean;
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  column-gap: 30px;
  padding-top: 40px;
  color: ${Color.FOOTER_FONT_COLOR};
`;

const PaginationButton = styled.button<setCurrent>`
  padding: 5px;
  font-size: ${({ $isActive }) => ($isActive ? "20px !important" : "18px !important")};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  color: ${Color.FOOTER_FONT_COLOR};
  background-color: transparent;
  border: ${({ $isActive }) =>
    $isActive ? `1px solid ${Color.FOOTER_FONT_COLOR}` : "transparent"};
  border-radius: ${({ $isActive }) => ($isActive ? "4px" : "0")};
  visibility: ${({ current }) => (current < 1 ? "hidden" : "visible")};
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

export { StyledPagination, PaginationButton };

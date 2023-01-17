import styled from "styled-components";
import { Color, S1 } from "ui";

interface setCurrent {
  current: number;
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

const PrevButton = styled.button`
  ${S1}
  color: ${Color.FONT_COLOR};
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: ${Color.PRIMARY_LIGHT};
  }
`;

const NextButton = styled(PrevButton)``;

const ButtonPage = styled(PrevButton)``;

const CurrentButton = styled(PrevButton)``;

const PageList = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  li {
    ${S1}
  }
`;

const FirstPageItem = styled.li<setCurrent>`
  display: ${({ current }) => (current <= 1 ? "none" : "block")};
  color: ${Color.SECONDARY};
`;

const SecondPageItem = styled.li<setCurrent>``;

const CurrentPageItem = styled.li``;

export {
  StyledPagination,
  PrevButton,
  NextButton,
  ButtonPage,
  PageList,
  FirstPageItem,
  SecondPageItem,
  CurrentButton,
  CurrentPageItem,
};

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, H3, S1 } from "ui";

const TabsControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const TabsBlock = styled.div``;

const TabButton = styled(NavLink)`
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

const SortButtons = styled.p`
  ${H3}
`;

export { TabsControlWrapper, TabsBlock, TabButton, SortButtons };

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { B1, B2, Color, Media } from "ui";

const StyledDateFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  ${Media.MD} {
    flex-wrap: wrap;
    justify-content: start;
    gap: 8px;
  }
`;

const FilterButton = styled(NavLink)`
  padding: 16px 40px;
  ${B1};
  color: ${Color.WHITE} !important;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
  ${Media.MD} {
    padding: 10px 20px;
    ${B2}
  }
`;

export { StyledDateFilter, FilterButton };

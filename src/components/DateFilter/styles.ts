import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledDateFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const FilterButton = styled(NavLink)`
  padding: 16px 40px;
  font-size: 16px;
  color: ${Color.WHITE} !important;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
`;

export { StyledDateFilter, FilterButton };

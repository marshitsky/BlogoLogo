import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserInfo = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

const StyledNavLink = styled(NavLink)`
  &:hover {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
  }
`;

export { UserInfo, StyledNavLink };

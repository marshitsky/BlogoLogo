import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const UserInfo = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

const StyledInitials = styled.div`
  padding: 7px;
  font-size: 34px;
  color: ${Color.WHITE};
  background: linear-gradient(133.87deg, #4d0ac7 -10.18%, #912ef2 108.59%);
  border-radius: 4px;
`;

const StyledNavLink = styled(NavLink)`
  &:hover {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
  }
`;

export { UserInfo, StyledNavLink, StyledInitials };

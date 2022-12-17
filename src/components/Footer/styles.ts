import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  margin: 0 15px;
`;

const CopyRight = styled.h3`
  color: ${Color.MEDIUM};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const ThemeToggle = styled.button`
  background: ${Color.PRIMARY};
  color: ${Color.WHITE};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { StyledFooter, ThemeToggle, CopyRight };

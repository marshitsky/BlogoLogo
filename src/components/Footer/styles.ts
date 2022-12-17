import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1120px;
  padding: 24px 0;
  margin: 0 auto;
`;

const CopyRight = styled.h3`
  color: ${Color.FOOTER_FONT_COLOR};
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

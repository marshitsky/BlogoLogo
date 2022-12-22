import styled from "styled-components";
import { Color } from "../../ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
  width: clamp(320px, 1120px, 100%);
  padding: 24px 11px;
  margin: 0 auto;
`;

const CopyRight = styled.h3`
  color: ${Color.FOOTER_FONT_COLOR};
  font-weight: 400;
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

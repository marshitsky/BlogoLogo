import styled from "styled-components";
import { Color, Media } from "ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
  width: clamp(250px, 1120px, 100%);
  padding: 24px 11px;
  margin: 0 auto;
  border-top: 1px solid ${Color.WHITE_HEADER};
  ${Media.XS} {
    flex-direction: column;
    column-gap: 15px;
  }
`;

const CopyRight = styled.h3`
  color: ${Color.FOOTER_FONT_COLOR};
  font-weight: 400;
  line-height: 24px;
`;

const ThemeToggle = styled.button`
  color: ${Color.WHITE};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: ${Color.PRIMARY};
`;

export { StyledFooter, ThemeToggle, CopyRight };

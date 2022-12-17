import { css } from "styled-components";

const lightTheme = css`
  --white: #ffffff;
  --white-bg: #f3f3f3;
  --grey-btn: #e0dfe0;
  --grey-font: #323537;
`;
const darkTheme = css`
  --white: rgba(255, 255, 255, 0.1);
  --white-bg: #313037;
  --grey-btn: rgba(255, 255, 255, 0.1);
  --grey-font: #ffffff;
`;

export { darkTheme, lightTheme };

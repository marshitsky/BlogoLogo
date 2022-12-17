import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./resetCss";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${resetCSS};
    html[theme="dark"]{
        ${darkTheme}
    }
    html[theme="light"]{
        ${lightTheme}
    }
    #root {
        color: ${Color.FONT_COLOR};
        background: ${Color.WHITE_BACKGROUND};
    }
`;

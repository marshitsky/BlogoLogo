import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./resetCss";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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

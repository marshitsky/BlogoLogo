import { css } from "styled-components";

export const resetCSS = css`
  *,
  *::before,
  *::after {
    padding: 0px;
    margin: 0px;
    border: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  html,
  body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }
  a,
  a:visited,
  a:hover {
    color: inherit;
    text-decoration: none;
  }
  a:focus,
  a:active {
    outline: none;
  }
  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  p + p {
    margin-top: 1em;
  }
  ul {
    list-style: none;
  }
  img,
  svg {
    vertical-align: top;
    max-width: 100%;
    height: auto;
  }
  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-style: inherit;
  }
  input::-ms-clear {
    display: none;
  }
  button,
  input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    border-color: transparent;
    background: none;
    cursor: pointer;
  }
  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  label {
    cursor: pointer;
  }
  legend {
    display: block;
  }
`;

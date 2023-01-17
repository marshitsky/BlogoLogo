import styled from "styled-components";
import { Color } from "ui";

const Button = styled.button`
  position: fixed;
  right: 10%;
  bottom: 8.5%;
  z-index: 9;
  padding: 0.5rem 1.4rem;
  font-size: 2.5rem;
  color: ${Color.WHITE};
  background-color: ${Color.FOOTER_FONT_COLOR};
  opacity: 0.6;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 50%;
  cursor: pointer;
`;

export { Button };
